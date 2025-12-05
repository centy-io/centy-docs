# Web App

Centy provides a web-based interface for managing your issues and documentation. The web app can be accessed in two ways:

1. **Locally** - Run the app on your machine alongside the daemon
2. **Online** - Use the hosted version at [app.centy.io](https://app.centy.io)

## Local Development

For local development, run both the daemon and the web app:

```bash
# Terminal 1: Start the daemon
npx centy start

# Terminal 2: Start the web app
cd centy-app
pnpm dev
```

Then open [http://localhost:5180](http://localhost:5180) in your browser.

## Using the Online Web App

The hosted web app at [app.centy.io](https://app.centy.io) allows you to access Centy from any device without installing the web app locally. However, you still need a daemon running to store and manage your data.

### Prerequisites

Before using the online app with a local daemon, ensure:

1. The daemon is installed and running on your machine
2. The daemon has CORS support enabled (see below)

### Enabling CORS on the Daemon

The daemon must be started with CORS enabled to accept requests from `app.centy.io`:

```bash
centy-daemon --cors-origins=https://app.centy.io
```

You can allow multiple origins if needed:

```bash
centy-daemon --cors-origins=https://app.centy.io,http://localhost:5180
```

### Configuring the Daemon URL

By default, the web app connects to `http://localhost:50051`. If your daemon is running on a different address, configure it in the app:

1. Open [app.centy.io](https://app.centy.io)
2. Go to **Settings**
3. Under **Daemon Connection**, enter your daemon URL
4. Click **Save**

The URL is stored in your browser's local storage and persists across sessions.

## Exposing Your Daemon Remotely

If you want to access your local daemon from outside your network (e.g., from a mobile device or different computer), you can use a tunneling service:

### Using ngrok

```bash
# Install ngrok (if not already installed)
brew install ngrok  # macOS
# or download from https://ngrok.com

# Start a tunnel to your daemon
ngrok http 50051 --host-header=localhost
```

ngrok will provide a public URL (e.g., `https://abc123.ngrok.io`) that you can use as your daemon URL in the web app settings.

### Using Cloudflare Tunnel

```bash
# Install cloudflared
brew install cloudflare/cloudflare/cloudflared  # macOS

# Start a quick tunnel
cloudflared tunnel --url http://localhost:50051
```

## Security Considerations

When exposing your daemon over the internet:

1. **Restrict CORS origins** - Only allow origins you trust (avoid using `*` in production)
2. **Use HTTPS** - Tunneling services like ngrok and Cloudflare Tunnel provide HTTPS automatically
3. **Protect your data** - The daemon stores project data locally; be careful about who has access
4. **Firewall rules** - Consider limiting which IPs can connect to your daemon

## Troubleshooting

### CORS Error

If you see an error like "Access to fetch has been blocked by CORS policy":

1. Ensure the daemon was started with `--cors-origins=https://app.centy.io`
2. Restart the daemon if you added the flag after it was already running
3. Check that the URL in Settings matches your daemon's address exactly

### Daemon Not Connected

If the app shows "Daemon Not Connected":

1. Verify the daemon is running: `ps aux | grep centy-daemon`
2. Check the daemon URL in Settings
3. If using a tunnel, ensure the tunnel is still active
4. Try clicking "Retry Connection" in the app

### Connection Timeout

If connections are timing out:

1. Check your network connection
2. If using a tunnel, verify it's working: `curl <your-tunnel-url>/health`
3. Ensure no firewall is blocking port 50051
