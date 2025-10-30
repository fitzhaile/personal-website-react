# Conversion Scripts

This directory contains scripts for converting content between HTML and Markdown formats.

## Available Scripts

### 1. `convert-to-markdown.js`
Converts HTML content to markdown files.

**Usage:**
```bash
node scripts/convert-to-markdown.js
```

**What it does:**
- Reads HTML content from `servicesData.js.original`
- Converts to markdown with class preservation (`{.classname}` syntax)
- Creates separate `.md` files in `app/components/case-studies/`
- Creates both card content (`{slug}-card.md`) and full case studies (`{slug}.md`)

**When to use:**
- Initial conversion from HTML to markdown
- Restoring from HTML backup

### 2. `convert-to-html.js`
Converts markdown files back to HTML format.

**Requirements:**
First install these packages:
```bash
npm install --save-dev unified remark-parse remark-rehype rehype-stringify
```

**Usage:**
```bash
node scripts/convert-to-html.js
```

**What it does:**
- Reads all markdown files from `app/components/case-studies/`
- Converts markdown to HTML (preserving classes from `{.classname}`)
- Updates `servicesData.js` with HTML content
- Backs up current file as `servicesData.js.markdown-backup`

**When to use:**
- Reverting to HTML format
- Exporting content as HTML

**IMPORTANT:** After running this script, you need to:
- Update `Services.js` to use `dangerouslySetInnerHTML` instead of `ReactMarkdown`
- Or restore the original `Services.js` from backup

## File Backups

The scripts create backups automatically:
- `servicesData.js.original` - Original HTML version (created before first conversion)
- `servicesData.js.markdown-backup` - Markdown version (created when converting back to HTML)

## Round-Trip Conversion

You can freely convert between formats:

```
HTML → Markdown:  node scripts/convert-to-markdown.js
Markdown → HTML:  node scripts/convert-to-html.js
```

Classes are preserved in both directions using the `{.classname}` syntax in markdown.

## Editing Workflow

**Recommended approach (Markdown):**
1. Keep content in markdown files
2. Edit markdown files directly in `app/components/case-studies/`
3. Build/deploy as usual - markdown is converted to HTML at build time

**If you prefer HTML:**
1. Run `convert-to-html.js` 
2. Edit HTML in `servicesData.js`
3. Update `Services.js` to render HTML instead of markdown

## Questions?

- Markdown files located in: `app/components/case-studies/`
- Service configuration: `app/components/servicesData.js`
- Rendering component: `app/components/Services.js`

