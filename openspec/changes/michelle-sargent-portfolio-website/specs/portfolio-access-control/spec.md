## ADDED Requirements

### Requirement: Site-wide password gate

The portfolio SHALL require a shared password before any page content is visible. Unauthenticated visitors SHALL see only a login screen; authenticated visitors SHALL access all routes for the browser session.

#### Scenario: Unauthenticated visitor blocked

- **WHEN** a visitor loads any page without a valid session
- **THEN** the site displays a password entry form and does not render portfolio content

#### Scenario: Successful authentication

- **WHEN** a visitor submits the correct password on the login screen
- **THEN** the site stores authentication in `sessionStorage` and displays the requested page

#### Scenario: Session persists across navigation

- **WHEN** an authenticated visitor navigates between `/`, `/work`, `/writing`, and `/about`
- **THEN** the site does not re-prompt for password until the browser session ends

#### Scenario: Incorrect password rejected

- **WHEN** a visitor submits an incorrect password
- **THEN** the site displays a generic error message without revealing whether the password was partially correct

### Requirement: Password supplied at build time

The site password SHALL be supplied via a `SITE_PASSWORD` environment variable at build time and SHALL NOT be committed to the repository in plaintext.

#### Scenario: Build without password fails

- **WHEN** a production build runs without `SITE_PASSWORD` set
- **THEN** the build fails with a clear error instructing the operator to set the variable

#### Scenario: Password not in source control

- **WHEN** the repository is inspected
- **THEN** no plaintext portfolio password appears in tracked files

### Requirement: Search engine exclusion

Because the site contains confidential Cisco content, the site SHALL instruct search engines not to index any page.

#### Scenario: Robots.txt blocks crawlers

- **WHEN** a crawler requests `/robots.txt`
- **THEN** the response disallows all paths

#### Scenario: Noindex meta tag on all pages

- **WHEN** any page HTML is rendered (behind the password gate)
- **THEN** the `<head>` includes `<meta name="robots" content="noindex, nofollow">`

### Requirement: Confidential content scope

The password gate protects the entire site because all Cisco-related portfolio content is confidential. The site SHALL include case studies and articles marked `visibility: internal` in the build, in addition to `visibility: public` entries.

#### Scenario: Internal case studies included behind gate

- **WHEN** a case study has `visibility: internal` in `work/index.yaml`
- **THEN** the case study is built and accessible at `/work/[slug]` after authentication

#### Scenario: Draft work excluded

- **WHEN** a work entry has `status: draft` in `work/index.yaml` and is not registered for publication
- **THEN** the entry is excluded from page generation unless explicitly promoted
