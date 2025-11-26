# Pakistan Economic Observatory 🇵🇰

A sophisticated web-based dashboard for analyzing market integration and temporal price dynamics across Pakistani cities using discrete structure analysis and network theory.

![Dashboard Preview](https://img.shields.io/badge/Status-Production-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Vite](https://img.shields.io/badge/Vite-7.2-purple)

## 🌟 Features

### Interactive Visualizations
- **Force-Directed Network Graph**: Real-time physics simulation showing city interconnections
- **City Centrality Matrix**: Advanced table with sorting, filtering, and column management
- **Composite Score Ranking**: Dynamic bar charts with multiple weighting techniques
- **Live Heat Map**: Correlation matrix with spectral gradient visualization
- **Temporal Hasse Diagram**: Timeline-based relationship analysis
- **Comparative Analysis**: Multi-metric comparison charts

### Configuration Sidebar
- **Product Category Selection**: Filter by commodity categories
- **Time Step Control**: Navigate through temporal data (2023-2024)
- **Similarity Threshold**: Dynamic edge filtering in network graph
- **Weighting Techniques**: Multiple composite score calculation methods
- **Real-time Statistics**: Min/Max/Avg similarity metrics

### Advanced Features
- ✨ Universal fullscreen mode for all sections
- 🎨 Dark glassmorphism theme with neon accents
- 📊 Interactive zoom/pan controls on network graph
- 🔍 Advanced search and filtering capabilities
- 📥 Export functionality for visualizations
- 📱 Responsive design for all screen sizes

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/pakistan-economic-observatory.git

# Navigate to project directory
cd pakistan-economic-observatory

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
vercel
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS with custom dark theme
- **Charts**: Recharts for statistical visualizations
- **Icons**: Lucide React
- **Network Visualization**: Custom Canvas-based force-directed graph
- **State Management**: React Hooks (useState, useEffect, useMemo)

## 📊 Data Analysis

The dashboard implements sophisticated analytical methods:

- **Centrality Measures**: Degree, Closeness, Betweenness, Eigenvector
- **Network Analysis**: Floyd-Warshall shortest paths, force-directed layout
- **Temporal Analysis**: Time-series integration tracking
- **Composite Scoring**: Multiple weighting strategies (Equal, Correlation-based, Entropy-based)

## 🎨 Design Philosophy

- **Cyber-Academic Aesthetic**: Professional dark theme with neon accents
- **Data-First**: Prioritizing clarity and insight over decoration
- **Performance**: Optimized rendering with Canvas API and React memoization
- **Accessibility**: High contrast ratios and semantic HTML

## 📁 Project Structure

```
react_app/
├── src/
│   ├── App.tsx              # Main application component
│   ├── index.css            # Global styles and Tailwind config
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── dist/                    # Production build output
└── package.json             # Dependencies and scripts
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for custom configuration:

```env
VITE_API_URL=http://localhost:5000
```

### Tailwind Configuration
Customize the theme in `tailwind.config.js`:
- Extended color palette for dark glassmorphism
- Custom animations and transitions
- Responsive breakpoints

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is part of an academic research submission.

## 👥 Authors

- **Research Team**: Discrete Mathematics & Network Analysis
- **Institution**: [Your Institution]
- **Year**: 2024

## 🙏 Acknowledgments

- Pakistan Bureau of Statistics for CPI data
- Network analysis algorithms based on established graph theory
- Design inspiration from modern data visualization platforms

## 📞 Contact

For questions or collaboration opportunities, please open an issue on GitHub.

---

**Note**: This dashboard currently uses mock data for demonstration. For production use with real PBS data, integrate the backend API endpoints as described in the deployment guide.
