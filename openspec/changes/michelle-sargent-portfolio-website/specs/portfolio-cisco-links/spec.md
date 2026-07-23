## ADDED Requirements

### Requirement: Cisco property link classification

The content pipeline and markdown renderer SHALL classify outbound links to Cisco properties and render them with an access-requirement indicator.

#### Scenario: Cisco domain detected

- **WHEN** a markdown link target matches a Cisco property pattern (`*.cisco.com`, `github.com/cisco-it-design/*`, `github.com/Cisco/*`, or other configured internal host patterns)
- **THEN** the system classifies the link as `access: cisco-sso-vpn`

#### Scenario: Non-Cisco external links unchanged

- **WHEN** a markdown link target is external but not a Cisco property (e.g. `linkedin.com`, `vercel.com`)
- **THEN** the system classifies the link as `access: public` with no SSO/VPN badge

### Requirement: SSO and VPN access indicator

Links classified as Cisco properties SHALL display a visible label indicating that access requires Cisco SSO and VPN.

#### Scenario: Cisco link badge in prose

- **WHEN** rendered markdown contains a link to `https://github.com/cisco-it-design/uxep-site`
- **THEN** the link displays an adjacent or inline label such as "Requires Cisco SSO & VPN"

#### Scenario: Cisco link in proof section

- **WHEN** a case study proof entry references a Cisco repo URL
- **THEN** the proof link renders with the SSO/VPN access indicator

### Requirement: Cisco link tooltip or supplementary text

Cisco property links SHALL include supplementary text explaining that the destination is only reachable on Cisco network with SSO authentication.

#### Scenario: Tooltip on hover or focus

- **WHEN** a visitor hovers or focuses a Cisco-classified link
- **THEN** supplementary text explains "This link requires Cisco VPN and SSO sign-in"

### Requirement: Internal placeholder links

Markdown or metadata links marked as internal (e.g. `[internal]` placeholders, `article: null`, or `visibility: internal` source paths) SHALL NOT render as clickable external URLs; they SHALL render as styled text with an "Internal — Cisco SSO & VPN" label.

#### Scenario: Internal repo placeholder

- **WHEN** content references an internal GitHub EMU repo without a public URL
- **THEN** the site renders the repo name as non-clickable text with the internal access label
