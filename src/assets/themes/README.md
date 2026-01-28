# 🌿 Minimal Green Login - Component-Based SCSS

A clean, minimal design system with light green accents broken down into reusable UI components.

## 📁 File Structure

```
styles/
├── _tokens.scss       # Design tokens (colors, spacing, etc.)
├── _layout.scss       # Login wrapper & layout
├── _card.scss         # Card component
├── _logo.scss         # Logo component
├── _input.scss        # Text input component
├── _button.scss       # Button component
└── main.scss          # Main entry point (imports all)
```

## 🎨 Design System

### Colors
- **Primary Green**: `#22C55E` (green-500)
- **Background**: `#F0FDF4` (green-50)
- **Text**: `#171717` (gray-900)
- **Border**: `#D4D4D4` (gray-300)
- **Error**: `#EF4444`

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

### Border Radius
- sm: 6px
- md: 8px
- lg: 12px
- xl: 16px

## 🚀 Usage

### Option 1: Use All Components (Recommended)
```scss
// In your login.component.scss
@import 'main';
```

### Option 2: Pick Individual Components
```scss
// In your login.component.scss
@import 'tokens';
@import 'layout';
@import 'card';
@import 'input';
@import 'button';
```

### Option 3: Use Single File
```scss
// Use minimal-green.scss (all-in-one file)
@import 'minimal-green';
```

## 🎯 Components Breakdown

### 1. Design Tokens (`_tokens.scss`)
Contains all design variables:
- Colors
- Spacing
- Typography
- Shadows
- Transitions

**Usage:**
```scss
@import 'tokens';

.my-element {
  color: $green-500;
  padding: $spacing-lg;
  border-radius: $radius-md;
}
```

### 2. Layout (`_layout.scss`)
Controls the page wrapper and centering.

**HTML:**
```html
<div class="login-wrapper">
  <!-- content -->
</div>
```

### 3. Card (`_card.scss`)
The white card container.

**HTML:**
```html
<div class="login-card">
  <!-- content -->
</div>
```

### 4. Logo (`_logo.scss`)
Logo and heading styles.

**HTML:**
```html
<div class="logo">
  <img src="assets/logo.png" alt="Logo">
  <h1>Fruit Pallet WMS</h1>
</div>
```

### 5. Input (`_input.scss`)
DevExtreme text box styling.

**Features:**
- Clean borders
- Green focus state
- Error state
- Validation messages

**HTML:**
```html
<dx-text-box
  placeholder="Email"
  [(value)]="email"
  mode="email">
  <dx-validator>
    <dxi-validation-rule type="required" message="Email is required"></dxi-validation-rule>
  </dx-validator>
</dx-text-box>
```

### 6. Button (`_button.scss`)
DevExtreme button styling.

**Features:**
- Green background
- Hover states
- Disabled state

**HTML:**
```html
<dx-button text="Login" (onClick)="onLogin()"></dx-button>
```

## 🎨 Customization

### Change Primary Color
Edit `_tokens.scss`:
```scss
// Change from green to blue
$green-500: #3B82F6;
$green-600: #2563EB;
$green-50: #EFF6FF;
```

### Adjust Spacing
Edit `_tokens.scss`:
```scss
$spacing-lg: 32px; // Increase spacing
```

### Change Border Radius
Edit `_tokens.scss`:
```scss
$radius-md: 12px; // More rounded
```

### Modify Input Height
Edit `_input.scss`:
```scss
.dx-texteditor-input {
  padding: 16px 14px !important; // Taller inputs
}
```

### Change Button Height
Edit `_button.scss`:
```scss
.dx-button {
  min-height: 56px !important; // Taller button
}
```

## 📱 Responsive Design

Breakpoint: `480px`

Mobile adjustments:
- Reduced padding
- Smaller logo
- Smaller heading

## 🔄 Adding New Components

1. Create new file: `_component-name.scss`
2. Import tokens at the top:
```scss
@import 'tokens';
```
3. Write your styles
4. Import in `main.scss`:
```scss
@import 'component-name';
```

## 💡 Examples

### Add a subtitle to logo
```scss
// In _logo.scss
.logo {
  .subtitle {
    color: $gray-500;
    font-size: $font-size-sm;
    margin-top: $spacing-sm;
  }
}
```

```html
<div class="logo">
  <img src="assets/logo.png" alt="Logo">
  <h1>Fruit Pallet WMS</h1>
  <p class="subtitle">Sign in to continue</p>
</div>
```

### Add a "Forgot Password" link
```scss
// Create _forgot-password.scss
@import 'tokens';

.forgot-password {
  text-align: right;
  margin-top: $spacing-md;
  
  a {
    color: $green-600;
    font-size: $font-size-sm;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
```

```html
<div class="forgot-password">
  <a href="#forgot">Forgot password?</a>
</div>
```

### Add a divider
```scss
// In your component file
.divider {
  height: 1px;
  background: $gray-200;
  margin: $spacing-lg 0;
}
```

## 🎯 Benefits of This Structure

✅ **Modular**: Easy to maintain and update
✅ **Reusable**: Use components across projects
✅ **Scalable**: Add new components easily
✅ **Organized**: Clear separation of concerns
✅ **Customizable**: Change tokens to theme entire app
✅ **Minimal**: Clean, no bloat
✅ **Professional**: Consistent design system

## 📦 Files Included

1. **main.scss** - Import this in your component
2. **minimal-green.scss** - All-in-one alternative
3. **_tokens.scss** - Design system variables
4. **_layout.scss** - Page layout
5. **_card.scss** - Card container
6. **_logo.scss** - Logo section
7. **_input.scss** - Input fields
8. **_button.scss** - Buttons

Choose the approach that works best for your project!