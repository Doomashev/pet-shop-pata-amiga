# Architecture
- Keep business identity and services in a shared typed data module so the catalog and selection use consistent information.
- Use TanStack Start root and index routes; never replace framework routing.
- Keep selections in React state only because this is an explicitly non-persistent portfolio demo.
- Define visual values in semantic stylesheet tokens and use the shared Button component.
