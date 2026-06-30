'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  UtensilsCrossed,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Search,
  TrendingUp,
  Users,
  DollarSign,
  Mail,
  Lock,
  Save,
  Star,
  StarOff,
  X,
  Image as ImageIcon,
  Home,
  AlertTriangle,
  Check,
  Bell,
} from 'lucide-react';
import { useMenu } from '@/context/MenuContext';
import { Dish, DishCategory } from '../../types';
import '@/app/styles/Admin.css';

const ADMIN_HASH = '0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c';
const SESSION_KEY = 'duckngood_admin_session';

type AdminTab = 'dashboard' | 'menu' | 'settings';

const INITIAL_DISH_STATE: Dish = {
  id: '',
  name: '',
  description: '',
  price: 0,
  category: DishCategory.STARTERS,
  image: 'https://picsum.photos/800/600',
  isSpicy: false,
  isVegetarian: false,
  isGlutenFree: false,
  featured: false,
};

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function sanitizeInput(input: any): string {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '');
}

function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

const ToastNotification: React.FC<{ toasts: Toast[]; removeToast: (id: number) => void }> = ({
  toasts,
  removeToast,
}) => {
  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type} animate-slide-up`}
          onClick={() => removeToast(toast.id)}
        >
          {toast.type === 'success' ? <Check size={18} /> : <AlertTriangle size={18} />}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default function Admin() {
  const router = useRouter();
  const { items: menuItems, addDish, updateDish, deleteDish: contextDeleteDish } = useMenu();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRecovering] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState<Dish | any>(INITIAL_DISH_STATE);
  const [isEditing, setIsEditing] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    // eslint-disable-next-line react-hooks/purity
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  useEffect(() => {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (session === 'valid') {
      setIsAuthenticated(true);
    }
    setIsAuthChecking(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const hash = await hashPassword(password);
      if (hash === ADMIN_HASH) {
        sessionStorage.setItem(SESSION_KEY, 'valid');
        setIsAuthenticated(true);
      } else {
        setLoginError('Invalid credentials.');
      }
    } catch (err) {
      setLoginError('Security error. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
    setPassword('');
  };

  const openAddModal = () => {
    setCurrentDish({ ...INITIAL_DISH_STATE });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const openEditModal = (dish: Dish) => {
    setCurrentDish({ ...dish });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleSaveDish = (e: React.FormEvent) => {
    e.preventDefault();

    const safeDish: Dish = {
      ...currentDish,
      name: sanitizeInput(currentDish.name),
      description: sanitizeInput(currentDish.description),
      price: Math.abs(parseFloat(String(currentDish.price)) || 0),
    };

    if (isEditing) {
      updateDish(safeDish);
      showToast('Dish updated successfully');
    } else {
      const newDish = {
        ...safeDish,
        id: generateId(),
      };
      addDish(newDish);
      showToast('New dish created');
    }
    setIsModalOpen(false);
  };

  const handleDeleteDish = (id: string) => {
    if (window.confirm('Confirm deletion? This action cannot be undone.')) {
      contextDeleteDish(id);
      showToast('Dish deleted', 'error');
    }
  };

  const handleToggleFeatured = (dish: Dish) => {
    updateDish({ ...dish, featured: !dish.featured });
    showToast(dish.featured ? 'Removed from Featured' : 'Added to Featured');
  };

  const handlePriceUpdate = (dish: Dish, newPriceStr: string) => {
    const newPrice = parseFloat(newPriceStr);
    if (!isNaN(newPrice) && newPrice >= 0 && newPrice !== dish.price) {
      updateDish({ ...dish, price: newPrice });
      showToast(`Price updated to $${newPrice.toFixed(2)}`);
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.new && passwordForm.new.length < 8) {
      alert('Password too short');
      return;
    }
    if (passwordForm.new !== passwordForm.confirm) {
      alert('Passwords do not match.');
      return;
    }
    showToast('Settings saved');
    setPasswordForm({ current: '', new: '', confirm: '' });
  };

  if (isAuthChecking) return <div className="admin-login-container text-white">Loading...</div>;

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card animate-slide-up">
          <div className="login-header">
            <h1 className="login-title">DucknGood</h1>
            <p className="login-subtitle">Secure Admin Portal</p>
          </div>

          {!isRecovering ? (
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    className="admin-input has-icon"
                    placeholder="admin@duckngood.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="login-field-header">
                  <label className="form-label">Password</label>
                </div>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <input
                    type="password"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      setLoginError('');
                    }}
                    className={`admin-input has-icon ${loginError ? 'error' : ''}`}
                    placeholder="••••••••"
                  />
                </div>
                {loginError && (
                  <div className="error-message animate-slide-down flex items-center gap-2">
                    <AlertTriangle size={14} /> {loginError}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Access Dashboard
              </button>

              <div className="login-footer">
                <button
                  type="button"
                  onClick={() => router.push('/')}
                  className="btn btn-secondary btn-full"
                >
                  <Home size={18} /> Back to Website
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center text-gray-400">Recovery Disabled for Demo</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <ToastNotification toasts={toasts} removeToast={removeToast} />

      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <span className="sidebar-brand-text">
            Duck<span className="sidebar-brand-accent">n</span>Good
          </span>
          <span className="sidebar-brand-sub">Admin</span>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} /> <span>Dashboard</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'menu' ? 'active' : ''}`}
            onClick={() => setActiveTab('menu')}
          >
            <UtensilsCrossed size={20} /> <span>Menu Manager</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} /> <span>Settings</span>
          </button>
        </nav>
        <div className="sidebar-footer">
          <button
            className="nav-item text-gray-400 hover:text-white"
            onClick={() => router.push('/')}
          >
            <Home size={20} /> <span>Back to Website</span>
          </button>
          <button
            className="nav-item text-red-400 hover:text-red-300 hover:bg-red-500/10"
            onClick={handleLogout}
          >
            <LogOut size={20} /> <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <main className="admin-content">
        <header className="content-header">
          <h2 className="page-title">{activeTab}</h2>
          <div className="user-profile">
            <Bell size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <div className="avatar-circle">AD</div>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="animate-fade-zoom">
            <div className="dashboard-grid">
              <div className="stat-card">
                <div className="stat-icon blue">
                  <DollarSign size={24} />
                </div>
                <div>
                  <p className="stat-label">Today&apos;s Revenue</p>
                  <p className="stat-value">$1,248</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon brand">
                  <Users size={24} />
                </div>
                <div>
                  <p className="stat-label">Total Guests</p>
                  <p className="stat-value">42</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon green">
                  <UtensilsCrossed size={24} />
                </div>
                <div>
                  <p className="stat-label">Menu Items</p>
                  <p className="stat-value">{menuItems.length}</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon purple">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="stat-label">Active Features</p>
                  <p className="stat-value text-small">
                    {menuItems.filter(i => i.featured).length}
                  </p>
                </div>
              </div>
            </div>

            <div className="section-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="card-title mb-0">Featured Dishes</h3>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Edit size={12} /> Click to edit price
                </span>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Dish Name</th>
                      <th>Price (Edit)</th>
                      <th>Status</th>
                      <th className="text-right">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems
                      .filter(item => item.featured)
                      .map(item => (
                        <tr key={item.id}>
                          <td className="font-medium text-white">{item.name}</td>
                          <td className="text-muted">
                            <div className="inline-price-wrapper">
                              <span className="text-gray-500">$</span>
                              <input
                                type="number"
                                step="0.01"
                                min="0"
                                className="inline-price-input"
                                defaultValue={item.price}
                                onBlur={e => handlePriceUpdate(item, e.target.value)}
                                onKeyDown={e => {
                                  if (e.key === 'Enter') {
                                    handlePriceUpdate(item, e.currentTarget.value);
                                    e.currentTarget.blur();
                                  }
                                }}
                              />
                            </div>
                          </td>
                          <td>
                            <button
                              onClick={() => handleToggleFeatured(item)}
                              className="featured-toggle-btn active"
                            >
                              <div className="featured-icon-container">
                                <Star size={14} fill="#eab308" className="icon-star" />
                                <StarOff size={14} className="icon-star-off" />
                              </div>
                              <span className="text-small font-bold">Featured</span>
                            </button>
                          </td>
                          <td className="text-right">
                            <button
                              onClick={() => openEditModal(item)}
                              className="btn-icon-only text-gray-400 hover:text-white"
                            >
                              <Edit size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'menu' && (
          <div className="animate-fade-zoom">
            <div className="toolbar">
              <div className="input-wrapper search-input">
                <Search className="input-icon" />
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="admin-input has-icon"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <button onClick={openAddModal} className="btn btn-primary">
                <Plus size={18} /> Add Dish
              </button>
            </div>
            <div className="section-card p-0 overflow-hidden">
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Tags</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems
                      .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map(item => (
                        <tr key={item.id}>
                          <td>
                            <img src={item.image} alt={item.name} className="table-img" />
                          </td>
                          <td>
                            <div className="dish-name">{item.name}</div>
                            <div className="dish-desc">{item.description}</div>
                          </td>
                          <td className="dish-category">{item.category}</td>
                          <td className="dish-price">${item.price}</td>
                          <td>
                            <div className="dish-tags">
                              {item.isGlutenFree && <span className="tag-badge gf">GF</span>}
                              {item.isVegetarian && <span className="tag-badge veg">VEG</span>}
                              {item.isSpicy && <span className="tag-badge hot">HOT</span>}
                              {item.featured && <span className="tag-badge star">STAR</span>}
                            </div>
                          </td>
                          <td>
                            <div className="dish-actions">
                              <button onClick={() => openEditModal(item)} className="btn-icon-only">
                                <Edit size={16} />
                              </button>
                              <button
                                className="btn-icon-only btn-danger-icon"
                                onClick={() => handleDeleteDish(item.id)}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="animate-fade-zoom settings-wrapper">
            <h2 className="page-heading">Account Settings</h2>
            <form onSubmit={handleSaveSettings} className="settings-stack">
              <div className="section-card">
                <div className="settings-section-header">
                  <div className="settings-icon">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h3 className="settings-section-title">Security</h3>
                    <p className="settings-section-desc">Manage your password.</p>
                  </div>
                </div>
                <div className="password-form">
                  <div className="form-group">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      value={passwordForm.new}
                      onChange={e => setPasswordForm({ ...passwordForm, new: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm</label>
                    <input
                      type="password"
                      value={passwordForm.confirm}
                      onChange={e => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                </div>
              </div>
              <div className="save-actions">
                <button type="submit" className="btn btn-primary">
                  <Save size={20} /> Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {isModalOpen && (
          <div className="modal-overlay animate-fade-zoom">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">{isEditing ? 'Edit Dish' : 'Add New Dish'}</h3>
                <button onClick={() => setIsModalOpen(false)} className="modal-close-btn">
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSaveDish}>
                <div className="modal-body">
                  <div className="grid-2">
                    <div className="col-span-2">
                      <label className="form-label">Dish Name</label>
                      <input
                        type="text"
                        required
                        value={currentDish.name}
                        onChange={e => setCurrentDish({ ...currentDish, name: e.target.value })}
                        className="admin-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Price ($)</label>
                      <div className="input-wrapper">
                        <span className="input-currency-symbol">$</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          required
                          value={currentDish.price}
                          onChange={e => setCurrentDish({ ...currentDish, price: e.target.value })}
                          className="admin-input input-padded-left"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Category</label>
                      <select
                        value={currentDish.category}
                        onChange={e =>
                          setCurrentDish({
                            ...currentDish,
                            category: e.target.value as DishCategory,
                          })
                        }
                        className="admin-input appearance-none"
                      >
                        {Object.values(DishCategory).map(cat => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="form-label">Image URL</label>
                      <div className="input-wrapper">
                        <ImageIcon className="input-icon" />
                        <input
                          type="url"
                          value={currentDish.image}
                          onChange={e => setCurrentDish({ ...currentDish, image: e.target.value })}
                          className="admin-input has-icon"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label className="form-label">Description</label>
                      <textarea
                        rows={3}
                        required
                        value={currentDish.description}
                        onChange={e =>
                          setCurrentDish({ ...currentDish, description: e.target.value })
                        }
                        className="admin-input no-resize"
                      />
                    </div>
                    <div className="col-span-2 checkbox-grid">
                      <label className="checkbox-group">
                        <input
                          type="checkbox"
                          checked={currentDish.isVegetarian || false}
                          onChange={e =>
                            setCurrentDish({ ...currentDish, isVegetarian: e.target.checked })
                          }
                          className="form-checkbox"
                        />
                        <span className="checkbox-text">Vegetarian</span>
                      </label>
                      <label className="checkbox-group">
                        <input
                          type="checkbox"
                          checked={currentDish.isGlutenFree || false}
                          onChange={e =>
                            setCurrentDish({ ...currentDish, isGlutenFree: e.target.checked })
                          }
                          className="form-checkbox"
                        />
                        <span className="checkbox-text">Gluten Free</span>
                      </label>
                      <label className="checkbox-group">
                        <input
                          type="checkbox"
                          checked={currentDish.isSpicy || false}
                          onChange={e =>
                            setCurrentDish({ ...currentDish, isSpicy: e.target.checked })
                          }
                          className="form-checkbox"
                        />
                        <span className="checkbox-text">Spicy</span>
                      </label>
                      <label className="checkbox-group featured">
                        <input
                          type="checkbox"
                          checked={currentDish.featured || false}
                          onChange={e =>
                            setCurrentDish({ ...currentDish, featured: e.target.checked })
                          }
                          className="form-checkbox featured"
                        />
                        <span className="checkbox-text-featured">Featured</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {isEditing ? 'Save Changes' : 'Create Dish'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
