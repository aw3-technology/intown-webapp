# Image Optimization Guide with vite-imagetools

## Installation Complete ✅
vite-imagetools has been installed and configured in your project.

## Usage Examples

### 1. Basic Image Resizing

```typescript
// Import image with specific width
import thumbnail from './images/hero.jpg?w=300&format=webp'
import medium from './images/hero.jpg?w=800&format=webp'
import large from './images/hero.jpg?w=1920&format=webp'

// Use in component
<img src={thumbnail} alt="Hero" />
```

### 2. Multiple Formats

```typescript
// Generate WebP and fallback JPEG
import heroWebp from './images/hero.jpg?format=webp'
import heroJpg from './images/hero.jpg?format=jpg'

// Use with picture element for browser compatibility
<picture>
  <source srcSet={heroWebp} type="image/webp" />
  <img src={heroJpg} alt="Hero" />
</picture>
```

### 3. Responsive Images with srcSet

```typescript
// Generate multiple sizes
import hero from './images/hero.jpg?w=300;600;900;1200&format=webp&as=srcset'

// Use with responsive img
<img 
  srcSet={hero} 
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Hero" 
/>
```

### 4. Background Images

```typescript
// Import as URL for CSS backgrounds
import bgImage from './images/background.jpg?w=1920&format=webp&as=url'

// Use in style
<div style={{ backgroundImage: `url(${bgImage})` }}>
  Content
</div>
```

### 5. Blur Placeholders

```typescript
// Generate blur placeholder for lazy loading
import placeholder from './images/hero.jpg?w=10&blur=5&format=webp'
import fullImage from './images/hero.jpg?w=1920&format=webp'

// Use with lazy loading
const [loaded, setLoaded] = useState(false);

<div style={{ position: 'relative' }}>
  <img 
    src={placeholder} 
    style={{ filter: loaded ? 'none' : 'blur(5px)' }}
    alt="Loading..." 
  />
  <img 
    src={fullImage}
    onLoad={() => setLoaded(true)}
    style={{ 
      position: 'absolute',
      opacity: loaded ? 1 : 0,
      transition: 'opacity 0.3s'
    }}
    alt="Hero" 
  />
</div>
```

### 6. Available Query Parameters

- `w` - Width in pixels (e.g., `?w=300`)
- `h` - Height in pixels (e.g., `?h=200`)
- `format` - Output format: `webp`, `jpg`, `png`, `avif`
- `quality` - Compression quality 0-100 (e.g., `?quality=80`)
- `fit` - How to fit: `cover`, `contain`, `fill`, `inside`, `outside`
- `position` - Position when cropping: `center`, `top`, `right`, etc.
- `background` - Background color for transparency (e.g., `?background=#ffffff`)
- `blur` - Apply blur filter (e.g., `?blur=5`)
- `grayscale` - Convert to grayscale (e.g., `?grayscale`)
- `as` - Output as: `srcset`, `url`, `meta` (metadata object)

### 7. TypeScript Support

Create a type declaration file `src/types/images.d.ts`:

```typescript
// For basic imports
declare module '*.jpg?*' {
  const src: string;
  export default src;
}

declare module '*.png?*' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

// For srcset imports
declare module '*&as=srcset' {
  const srcSet: string;
  export default srcSet;
}

// For metadata imports
declare module '*&as=meta' {
  interface ImageMetadata {
    src: string;
    width: number;
    height: number;
    format: string;
  }
  const meta: ImageMetadata;
  export default meta;
}
```

### 8. Practical Example for Your Project

Update image imports in your components:

```typescript
// Before
import heroImage from '/images/los-angeles-skyline.png'

// After - Optimized versions
import heroSmall from '/images/los-angeles-skyline.png?w=640&format=webp'
import heroMedium from '/images/los-angeles-skyline.png?w=1024&format=webp'
import heroLarge from '/images/los-angeles-skyline.png?w=1920&format=webp'
import heroSrcSet from '/images/los-angeles-skyline.png?w=640;1024;1920&format=webp&as=srcset'

// Use with responsive image
<img 
  srcSet={heroSrcSet}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1920px"
  src={heroMedium}
  alt="Los Angeles Skyline"
  className="w-full h-auto"
/>
```

### 9. Performance Tips

1. **Use WebP format** - Typically 25-35% smaller than JPEG
2. **Generate multiple sizes** - Serve appropriate size for device
3. **Lazy load images** - Load images as they enter viewport
4. **Use blur placeholders** - Better perceived performance
5. **Set explicit dimensions** - Prevent layout shift

### 10. Build Optimization

Images are automatically optimized during build:
- Removes metadata
- Applies compression
- Generates specified formats
- Creates responsive versions

Run `npm run build` to see optimized output in `dist/assets/`.

## Next Steps

1. Update existing image imports to use optimization queries
2. Implement lazy loading for below-the-fold images
3. Use srcSet for responsive images
4. Consider using AVIF format for modern browsers (smaller than WebP)

## Resources

- [vite-imagetools Documentation](https://github.com/JonasKruckenberg/imagetools/tree/main/packages/vite)
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [MDN Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)