import os
from PIL import Image, ImageDraw, ImageFont
import random

# Define image names needed for the landing page
image_names = [
    "hepatoburn-bottle.png",
    "hepatoburn-bottle-large.png",
    "hepatoburn-bottles.png",
    "2-bottles.png",
    "3-bottles.png",
    "6-bottles.png",
    "liver-illustration.png",
    "silymarin.png",
    "betaine.png",
    "berberine.png",
    "molybdenum.png",
    "glutathione.png",
    "resveratrol.png",
    "camellia-sinensis.png",
    "genistein.png",
    "chlorogenic-acid.png",
    "choline.png",
    "testimonial-1.jpg",
    "testimonial-2.jpg",
    "testimonial-3.jpg",
    "guarantee-seal.png",
    "hepatoburn-social-share.jpg",
    "favicon.png"
]

# Create output directory
output_dir = "/home/ubuntu/images"
os.makedirs(output_dir, exist_ok=True)

# Function to create a placeholder image
def create_placeholder(filename, width=400, height=300, bg_color=None):
    # Extract name without extension for text
    name = os.path.splitext(os.path.basename(filename))[0]
    
    # Set background color based on image type
    if bg_color is None:
        if "bottle" in name or "guarantee" in name:
            bg_color = (139, 0, 0)  # Burgundy for product images
        elif "testimonial" in name:
            bg_color = (240, 240, 240)  # Light gray for testimonials
        elif any(ingredient in name for ingredient in ["silymarin", "betaine", "berberine", "molybdenum", "glutathione", 
                                                      "resveratrol", "camellia", "genistein", "chlorogenic", "choline"]):
            bg_color = (230, 255, 230)  # Light green for ingredients
        else:
            bg_color = (245, 245, 245)  # Default light gray
    
    # Create image with background color
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Add border
    border_width = 2
    draw.rectangle(
        [(border_width, border_width), (width - border_width, height - border_width)],
        outline=(200, 200, 200)
    )
    
    # Add text
    try:
        font = ImageFont.truetype("DejaVuSans.ttf", 20)
        small_font = ImageFont.truetype("DejaVuSans.ttf", 16)
    except IOError:
        font = ImageFont.load_default()
        small_font = ImageFont.load_default()
    
    # Format the text
    text = name.replace("-", " ").title()
    
    # Get text size
    text_width, text_height = draw.textsize(text, font=font) if hasattr(draw, 'textsize') else (150, 20)
    
    # Position text in center
    position = ((width - text_width) // 2, (height - text_height) // 2 - 15)
    
    # Add text
    draw.text(position, text, fill=(255, 255, 255) if "bottle" in name or "guarantee" in name else (0, 0, 0), font=font)
    
    # Add dimensions text
    dimensions_text = f"{width} x {height} px"
    dim_text_width, dim_text_height = draw.textsize(dimensions_text, font=small_font) if hasattr(draw, 'textsize') else (100, 16)
    dim_position = ((width - dim_text_width) // 2, (height - dim_text_height) // 2 + 15)
    
    draw.text(dim_position, dimensions_text, 
              fill=(255, 255, 255) if "bottle" in name or "guarantee" in name else (0, 0, 0), 
              font=small_font)
    
    # Save the image
    img.save(os.path.join(output_dir, filename))
    print(f"Created {filename} ({width}x{height})")

# Create each placeholder image
for image_name in image_names:
    # Determine dimensions based on image type
    if "bottle" in image_name:
        if "large" in image_name:
            width, height = 500, 600
        else:
            width, height = 300, 400
    elif "testimonial" in image_name:
        width, height = 400, 500
    elif "guarantee" in image_name:
        width, height = 300, 300
    elif "social-share" in image_name:
        width, height = 1200, 630
    elif "favicon" in image_name:
        width, height = 32, 32
    else:
        width, height = 200, 200
    
    create_placeholder(image_name, width, height)

print("All placeholder images created successfully with dimensions!")
