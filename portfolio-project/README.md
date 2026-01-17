# Portfolio Project

This is a portfolio project created using HTML, CSS, JavaScript, and Bootstrap. This project was created to practice coding using AI.

## Project Structure

```
portfolio-project
├── src
│   ├── index.html         # Main HTML document for the portfolio
│   ├── css
│   │   └── styles.css     # Custom CSS styles
│   ├── js
│   │   └── main.js        # JavaScript for interactive features
│   └── assets
│       ├── fonts          # Directory for custom font files
│       └── CV_TeresaFernandez.pdf  # CV file for download
├── netlify.toml           # Netlify configuration
└── README.md              # Project documentation
```

## Features

- Responsive design with Bootstrap
- Animated components with CSS
- Download CV functionality
- Social media links (GitHub, LinkedIn)

## Deployment on Netlify

### Method 1: Using Netlify CLI
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Navigate to project directory: `cd portfolio-project`
3. Deploy: `netlify deploy --prod --dir=src`

### Method 2: Connect GitHub Repository
1. Push this repository to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Set build settings:
   - Build command: (leave empty)
   - Publish directory: `src`
6. Click "Deploy site"

### Method 3: Drag and Drop
1. Go to [Netlify](https://netlify.com)
2. Drag and drop the `src` folder to deploy

## Important Notes

- Add your CV PDF file as `src/assets/CV_TeresaFernandez.pdf`
- Update GitHub and LinkedIn URLs in the footer
- Replace project images with your own projects

## Getting Started

1. Clone or download this repository
2. Replace placeholder content with your information
3. Add your CV PDF file to `src/assets/`
4. Update social media links in the footer
5. Deploy to Netlify using one of the methods above

- Responsive design using Bootstrap
- Custom styling with shades of blue and green
- Interactive elements powered by JavaScript
- Organized structure for easy navigation and maintenance

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-project
   ```

3. Open the `src/index.html` file in your web browser to view the portfolio.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap

## License

This project is licensed under the MIT License.