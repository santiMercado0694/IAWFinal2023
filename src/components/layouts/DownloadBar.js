import React, { useEffect } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

export default function DownloadBar({ onDownload }) {
    const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

    useEffect(() => {
      window.addEventListener("beforeinstallprompt", (event) => {
        // Prevent the mini-infobar from appearing on mobile.
        event.preventDefault();
        console.log("👍", "beforeinstallprompt", event);
        // Stash the event so it can be triggered later.
        // @ts-ignore
        window.deferredPrompt = event;
        // Remove the 'hidden' class from the install button container.
        setIsReadyForInstall(true);
      });
    }, []);

    async function downloadApp() {
        console.log("👍", "butInstall-clicked");
        // @ts-ignore
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          // The deferred prompt isn't available.
          console.log("oops, no prompt event guardado en window");
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        // @ts-ignore
        window.deferredPrompt = null;
        // Hide the install button.
        setIsReadyForInstall(false);
      }

  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ flexGrow: 1 }} />
        {isReadyForInstall && <Button variant="contained" color="primary" onClick={downloadApp}>
          Descargar
        </Button>}
      </Toolbar>
    </AppBar>
  );
}
