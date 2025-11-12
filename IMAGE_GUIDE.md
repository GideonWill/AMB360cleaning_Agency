# Image Guide - Finding Images of Black Women for Cleaning Services

## Current Image Setup

The website currently uses generic Unsplash images. To replace them with images featuring black women, follow these steps:

## Option 1: Using Unsplash (Recommended)

1. Visit [Unsplash.com](https://unsplash.com)
2. Search for terms like:
   - "black woman cleaning"
   - "african woman professional cleaner"
   - "black woman housekeeping"
   - "professional cleaner"
   - "cleaning service"
3. Filter by "People" category
4. Select high-quality images (at least 1200px width)
5. Copy the image URL and replace in the components

## Option 2: Using Pinterest

1. Visit [Pinterest.com](https://pinterest.com)
2. Search for "black woman cleaning professional"
3. Find images you like
4. Download and host them yourself (or use the image URL if available)
5. Update the image URLs in the components

## Image Locations to Update

### Hero Section
- File: `src/components/Hero.jsx`
- Line: ~26
- Current: `https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop&q=80`

### Services Section
- File: `src/components/Services.jsx`
- Lines: 7, 13, 19, 25, 31, 37, 43, 49, 55, 61
- Update the `image` property in each service object

### About Section
- File: `src/components/About.jsx`
- Line: ~57
- Current: `https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop&q=80`

### Testimonials Section
- File: `src/components/Testimonials.jsx`
- Lines: 8, 13, 18
- Update the `image` property in each testimonial object

## Recommended Unsplash Collections

You can also browse these Unsplash collections:
- Search: "diverse cleaning professionals"
- Search: "black professionals at work"
- Search: "african women in business"

## Image Requirements

- **Resolution**: Minimum 1200px width for hero images, 600px for service cards
- **Format**: JPG or WebP
- **Aspect Ratio**: 
  - Hero: Square or 4:3
  - Services: 3:2 or 16:9
  - Testimonials: Square (1:1)
- **Quality**: High quality, professional photos
- **Content**: Must show black women in cleaning/professional contexts

## Quick Replace Example

To replace a service image:

```jsx
// In src/components/Services.jsx
{
  id: 1,
  title: "Residential/Domestic Cleaning",
  description: "Regular home cleaning services...",
  image: "YOUR_NEW_IMAGE_URL_HERE?w=600&h=400&fit=crop&q=80"
}
```

## Notes

- Always use the `?w=WIDTH&h=HEIGHT&fit=crop&q=80` parameters for Unsplash images to ensure proper sizing and quality
- Test images after replacing to ensure they load correctly
- Consider hosting images yourself for better control and faster loading times

