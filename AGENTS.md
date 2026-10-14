<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application conventions
- Keep bakery menu content in a shared data module and use one shared menu page across the three content routes so product information stays consistent.
- Store presentation selections in validated route search parameters so the nine page/style combinations are directly shareable.
- Define bakery visual themes and layout variants in the global stylesheet; use semantic button variants for interactive controls.
