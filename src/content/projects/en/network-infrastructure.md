---
title: 'Linux Network Infrastructure Automation'
description: 'Transformation of a manual networking assignment into an automated Infrastructure as Code (IaC) project. Features idempotent Bash scripting for VLANs, Routing, NAT, and Service deployment.'
publishDate: 2024-06-15
tags: ['Linux', 'Bash', 'Debian', 'Networking', 'Wireshark', 'Automation', 'Security']
category: 'academic'
github: 'https://github.com/lboeglin/linux-network-infrastructure'
image: '../../../assets/projets/architecture-diagram.png'
featured: true
teamSize: 1
---

## Context

This project represents a complete refactoring of a first-year university networking assignment. While the initial topology was designed in a pair programming setting, I rebuilt the entire implementation individually to modernize the deployment process.

I replaced the original manual configuration steps with robust, **idempotent Bash scripts**, demonstrating **Infrastructure as Code (IaC)** practices to ensure consistency and reliability.

## Architecture Overview

The infrastructure simulates a segmented corporate network using Debian virtual machines, divided into two security zones:

1.  **VLAN Zone (ID 117):** Isolated internal network for Client workstations and the DHCP Server.
2.  **LAN Zone (Management):** Host for core services including the SMTP Mail Server and DNS Authority.
3.  **Router Node:** A central gateway managing **NAT (Masquerade)**, **Stateful Firewall rules (iptables)**, and inter-VLAN routing.

## Technical Implementation

### Automation & Scripting

I developed a unified orchestration script (`network-config.sh`) that automates the provisioning of any node in the network.

- **Idempotency:** The script uses checks (e.g., `iptables -C`, `ip link show`) to prevent duplicate configurations, allowing safe re-execution.
- **Persistence:** It configures `netfilter-persistent` and `sysctl.d` to ensure routing tables and security rules survive system reboots.
- **Dynamic Config:** It automatically generates configuration files for `isc-dhcp-server` and `postfix` based on the environment variables.

### Network Analysis

To validate the integrity of the network, I performed deep packet analysis using **Wireshark**:

- Verified **802.1Q VLAN tagging** in ICMP frames.
- Analyzed the 4-step **DHCP DORA** handshake (Discover, Offer, Request, Acknowledge).
- Traced DNS resolution and TCP handshakes for SMTP traffic.

## Key Outcomes

- Transitioned from manual, error-prone setup to a **single-command deployment**.
- Implemented **Stateful Firewalling** to allow established return traffic while blocking unauthorized access.
- Produced professional technical documentation and architectural diagrams.
