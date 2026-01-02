@echo off
echo Starting Portfolio Deployment...

echo.
echo Step 1: Installing dependencies...
call npm install

echo.
echo Step 2: Using working configuration...
copy next.config.working.mjs next.config.mjs

echo.
echo Step 3: Starting development server for testing...
echo You can now test your portfolio at http://localhost:3000
echo.
echo To deploy to Vercel, run: npm run deploy
echo To deploy to other platforms, see DEPLOYMENT.md
echo.

start cmd /k "npm run dev"

echo.
echo Deployment script completed!
echo Check DEPLOYMENT.md for detailed deployment instructions.
pause