# GitHub Pages Deployment Setup

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Configuration Complete ✅

The following files have been configured for deployment:

1. **`.github/workflows/nextjs.yml`** - GitHub Actions workflow (already present)
2. **`next.config.ts`** - Updated with static export settings
3. **`public/.nojekyll`** - Prevents Jekyll processing

## GitHub Repository Settings

To complete the setup, configure GitHub Pages in your repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
4. Save the settings

## Deployment Process

Once configured, the deployment happens automatically:

- **Trigger**: Every push to the `main` branch
- **Manual Deploy**: Use the "Actions" tab → "Deploy Next.js site to Pages" → "Run workflow"

## Build Process

The workflow will:
1. Check out your code
2. Setup Node.js (version 20)
3. Install dependencies
4. Build the Next.js static site
5. Deploy to GitHub Pages

## Accessing Your Site

After successful deployment, your site will be available at:
```
https://<username>.github.io/<repository-name>/
```

Example: `https://yourusername.github.io/github-test-main/`

## Testing Locally

To test the static export locally:

```bash
npm run build
```

This will create an `out/` directory with your static site. You can serve it locally:

```bash
npx serve out
```

## Troubleshooting

### If deployment fails:
1. Check the Actions tab for error messages
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the workflow has necessary permissions

### If images don't load:
- Images are now unoptimized for static export
- Ensure all image paths are correct and files exist in the `public/` directory

## Next Steps

1. Commit these changes:
   ```bash
   git add .
   git commit -m "Configure GitHub Actions for static deployment"
   git push origin main
   ```

2. Monitor the deployment in the **Actions** tab of your GitHub repository

3. Once deployed, visit your GitHub Pages URL to see your live site!
