import { useEffect } from 'react';

export default function useExternalScripts(urls) {
    useEffect(() => {
        const head = document.querySelector('head');

        urls.forEach(url => {
            const script = document.createElement('script');
            script.src = url;
            script.type = 'text/javascript';
            script.async = true; // Load scripts asynchronously
            head.appendChild(script);
        });

        return () => {
            urls.forEach(url => {
                const script = document.querySelector(`script[src="${url}"]`);
                if (script) {
                    head.removeChild(script);
                }
            });
        };
    }, [urls]);
}
