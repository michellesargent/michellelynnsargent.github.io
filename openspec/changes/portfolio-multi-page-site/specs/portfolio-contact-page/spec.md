## ADDED Requirements

### Requirement: Dedicated contact page

The site SHALL provide a contact page at `/contact` with LinkedIn as the primary contact method.

#### Scenario: Contact page renders

- **WHEN** a visitor navigates to `/contact`
- **THEN** the page displays a clear heading, brief availability message, and a prominent LinkedIn CTA button

### Requirement: No email or contact form

The contact page SHALL NOT include email addresses, mailto links, or contact forms.

#### Scenario: No email exposed

- **WHEN** a visitor views `/contact`
- **THEN** no email address or contact form is present on the page

### Requirement: GitHub link on contact page

The contact page SHALL include a secondary link to Michelle's GitHub profile.

#### Scenario: GitHub link visible

- **WHEN** a visitor views `/contact`
- **THEN** a GitHub profile link is available alongside the LinkedIn CTA

### Requirement: Homepage contact preview

The homepage SHALL include a contact preview section linking to `/contact` and providing a direct LinkedIn link.

#### Scenario: Homepage contact section

- **WHEN** a visitor views the contact preview on the homepage
- **THEN** both a link to `/contact` and a LinkedIn link are available

### Requirement: Contact page section header

The contact page SHALL use the editorial section header pattern with an eyebrow label and descriptive copy about collaboration and opportunities.

#### Scenario: Contact header styling

- **WHEN** a visitor views `/contact`
- **THEN** the page uses consistent eyebrow label and heading typography matching other pages
