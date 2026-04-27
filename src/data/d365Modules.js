import {
  Wallet,
  ShoppingCart,
  Users,
  Factory,
  HeadphonesIcon,
  BarChart3,
  Globe,
} from "lucide-react";

export const d365Modules = [
  {
    slug: "finance",
    icon: Wallet,
    title: "Finance",
    tagline: "Run a smarter, more agile finance organization",
    description:
      "Financial management, budgeting, accounts payable/receivable, general ledger, and financial reporting.",
    color: "bg-primary/10 text-primary",
    accent: "210 100% 40%",
    clientValue: [
      "Unified general ledger across legal entities and currencies",
      "Automated AP/AR with invoice capture and approvals",
      "Real-time financial reporting and dashboards",
      "Built-in tax, compliance and audit trails",
      "Budget planning, forecasting and variance analysis",
    ],
    usage: [
      "Close the books faster with automated period-end processes",
      "Reduce DSO with smart collections and credit management",
      "Gain visibility into cash position across the enterprise",
      "Standardize chart of accounts globally with local compliance",
    ],
    sections: [
      {
        slug: "general-ledger",
        title: "General Ledger",
        summary:
          "The financial backbone â€” central repository of all accounting transactions across the organization.",
        features: [
          "Multi-dimensional chart of accounts",
          "Multi-currency and multi-entity consolidation",
          "Allocation rules and journal automation",
          "Period close workflow and audit trail",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/finance/general-ledger/general-ledger",
      },
      {
        slug: "accounts-payable",
        title: "Accounts Payable",
        summary:
          "Manage vendor invoices, payments and supplier relationships end-to-end.",
        features: [
          "Vendor invoice automation and OCR",
          "Three-way matching (PO, receipt, invoice)",
          "Payment proposals and electronic payments",
          "1099 / withholding tax handling",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/accounts-payable",
      },
      {
        slug: "accounts-receivable",
        title: "Accounts Receivable",
        summary:
          "Customer invoicing, collections and credit management to optimize cash flow.",
        features: [
          "Free text and project invoicing",
          "Collections workspace and aging analysis",
          "Credit limits and credit holds",
          "Customer payment journals and settlements",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/accounts-receivable",
      },
      {
        slug: "budgeting",
        title: "Budgeting",
        summary:
          "Plan, control and forecast budgets with workflow-driven approvals.",
        features: [
          "Budget planning workspaces",
          "Budget control and encumbrance accounting",
          "Forecast positions and HR budgeting",
          "Excel integration for collaborative planning",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/finance/budgeting/budgeting-overview",
      },
      {
        slug: "fixed-assets",
        title: "Fixed Assets",
        summary:
          "Track the full lifecycle of capital assets from acquisition to disposal.",
        features: [
          "Multiple depreciation books (tax, book, IFRS)",
          "Asset acquisition, transfer, disposal flows",
          "Integration with AP and project accounting",
          "Mass updates and bonus depreciation",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/finance/fixed-assets/fixed-assets",
      },
      {
        slug: "cash-management",
        title: "Cash & Bank Management",
        summary:
          "Manage bank accounts, reconciliations and cash flow forecasts.",
        features: [
          "Bank statement import and auto-reconciliation",
          "Cash flow forecasting",
          "Letter of credit and guarantees",
          "Multi-currency bank accounts",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/finance/cash-bank-management/cash-bank-management",
      },
    ],
    docHref: "https://learn.microsoft.com/en-us/dynamics365/finance/",
  },
  {
    slug: "supply-chain-management",
    icon: ShoppingCart,
    title: "Supply Chain Management",
    tagline: "Build a resilient, connected supply chain",
    description:
      "Procurement, inventory, warehouse management, transportation, and product information management.",
    color: "bg-emerald-500/10 text-emerald-600",
    accent: "152 70% 35%",
    clientValue: [
      "End-to-end visibility from procurement to delivery",
      "AI-powered demand forecasting and master planning",
      "Mobile warehouse execution with barcode scanning",
      "Vendor collaboration and procurement automation",
      "Real-time inventory across sites and warehouses",
    ],
    usage: [
      "Reduce stockouts and excess inventory with smarter planning",
      "Cut procurement cycle time with automated workflows",
      "Optimize warehouse throughput and pick accuracy",
      "Lower transportation costs with rate shopping and load building",
    ],
    sections: [
      {
        slug: "procurement",
        title: "Procurement & Sourcing",
        summary:
          "Manage purchase requisitions, RFQs, purchase orders and vendor agreements.",
        features: [
          "Purchase requisition workflows",
          "RFQ and vendor bidding",
          "Purchase agreements and trade allowances",
          "Vendor onboarding and self-service portal",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/procurement-sourcing-overview",
      },
      {
        slug: "inventory-management",
        title: "Inventory Management",
        summary:
          "Track inventory across sites, warehouses, locations and dimensions.",
        features: [
          "Multi-site, multi-warehouse inventory",
          "Batch, serial, lot tracking",
          "Inventory journals and counting",
          "Costing methods (FIFO, weighted average, standard)",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-home-page",
      },
      {
        slug: "warehouse-management",
        title: "Warehouse Management",
        summary:
          "Advanced WMS with mobile device support, wave/load planning and directed work.",
        features: [
          "Mobile device portal and scanning",
          "Wave processing and replenishment",
          "Cluster picking and packing stations",
          "Cycle counting and inventory adjustments",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/wms-overview",
      },
      {
        slug: "transportation",
        title: "Transportation Management",
        summary:
          "Plan, optimize and execute inbound and outbound shipments.",
        features: [
          "Carrier rate engine and rate shopping",
          "Load building and route planning",
          "Freight reconciliation",
          "Hub and appointment scheduling",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/transportation/transportation-management-overview",
      },
      {
        slug: "master-planning",
        title: "Master Planning",
        summary:
          "Demand and supply planning to balance customer service with inventory cost.",
        features: [
          "Planning Optimization service (cloud-scale)",
          "MRP, MPS and forecasting",
          "Coverage groups and safety stock",
          "Action messages and pegging",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/master-planning/master-planning-overview",
      },
      {
        slug: "product-information",
        title: "Product Information Management",
        summary:
          "Centralized product master with variants, attributes and lifecycle.",
        features: [
          "Product master and released products",
          "Product variants, dimensions and attributes",
          "Engineering change management",
          "Product hierarchies and categories",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/pim/product-information",
      },
    ],
    docHref: "https://learn.microsoft.com/en-us/dynamics365/supply-chain/",
  },
  {
    slug: "sales",
    icon: Users,
    title: "Sales",
    tagline: "Close more deals with intelligent selling",
    description:
      "Lead and opportunity management, quotes, orders, customer relationships, and sales analytics.",
    color: "bg-violet-500/10 text-violet-600",
    accent: "262 70% 50%",
    clientValue: [
      "360Â° customer view across marketing, sales and service",
      "AI-driven lead scoring and next-best-action",
      "Guided selling with playbooks and process flows",
      "Mobile-first seller experience",
      "Integrated quote-to-cash with Finance & SCM",
    ],
    usage: [
      "Shorten sales cycles with automated follow-ups",
      "Improve forecast accuracy with pipeline analytics",
      "Coordinate complex deals with team selling",
      "Drive cross-sell/upsell with relationship insights",
    ],
    sections: [
      {
        slug: "leads",
        title: "Leads",
        summary:
          "Capture, qualify and route leads from any channel into your sales process.",
        features: [
          "Lead capture from web, email and events",
          "Automatic lead scoring",
          "Assignment rules and queues",
          "Lead-to-opportunity conversion",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order",
      },
      {
        slug: "opportunities",
        title: "Opportunities",
        summary:
          "Manage deals through your pipeline with stage gates and forecasting.",
        features: [
          "Business process flows for deal stages",
          "Probability and revenue forecasting",
          "Competitor and stakeholder tracking",
          "Sales playbooks",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-opportunity-sales",
      },
      {
        slug: "quotes",
        title: "Quotes",
        summary: "Configure, price and quote with approval workflows.",
        features: [
          "Quote templates and revisions",
          "Discount and approval workflows",
          "Multi-currency pricing",
          "Convert quote to order seamlessly",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/sales/create-quote-sales",
      },
      {
        slug: "sales-orders",
        title: "Sales Orders",
        summary:
          "Order capture and fulfillment integrated with inventory and finance.",
        features: [
          "Order entry and order holds",
          "ATP / CTP availability",
          "Drop-ship and intercompany",
          "Returns and credit management",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/tasks/create-sales-order",
      },
      {
        slug: "customer-accounts",
        title: "Customer Accounts",
        summary: "Maintain unified customer master across CRM and ERP.",
        features: [
          "Account hierarchies and contacts",
          "Activity timeline and email tracking",
          "Customer service history",
          "Credit limit and payment terms",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/sales/manage-accounts",
      },
      {
        slug: "sales-analytics",
        title: "Sales Analytics",
        summary:
          "Out-of-the-box dashboards and AI insights for sales leaders.",
        features: [
          "Pipeline and forecast dashboards",
          "Conversation intelligence",
          "Relationship analytics",
          "Power BI embedded reports",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/sales/sales-insights/overview",
      },
    ],
    docHref: "https://learn.microsoft.com/en-us/dynamics365/sales/",
  },
  {
    slug: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    tagline: "Modernize the shop floor with connected operations",
    description:
      "Production control, lean manufacturing, discrete and process manufacturing, and shop floor management.",
    color: "bg-orange-500/10 text-orange-600",
    accent: "25 95% 50%",
    clientValue: [
      "Discrete, process and lean manufacturing in one system",
      "Real-time shop floor execution and IoT integration",
      "Quality management built into production flow",
      "Capacity and finite scheduling",
      "Full traceability and compliance reporting",
    ],
    usage: [
      "Reduce production lead times and WIP inventory",
      "Improve OEE with real-time machine data",
      "Lower scrap and rework with quality controls",
      "Adapt quickly to engineering and demand changes",
    ],
    sections: [
      {
        slug: "production-orders",
        title: "Production Orders",
        summary:
          "Plan, schedule and execute discrete manufacturing orders.",
        features: [
          "Order estimation and scheduling",
          "Material and capacity reservations",
          "Operation reporting and feedback",
          "Costing and variance analysis",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/production-control/production-process-overview",
      },
      {
        slug: "bom-management",
        title: "BOM Management",
        summary:
          "Maintain bills of materials with versions and effectivity dates.",
        features: [
          "Multi-level BOMs",
          "Version control and approvals",
          "BOM calculation and cost rollup",
          "Formula and co-/by-products (process)",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/production-control/bill-of-material-bom",
      },
      {
        slug: "routes",
        title: "Routes & Operations",
        summary:
          "Define manufacturing routes, work centers and resource requirements.",
        features: [
          "Resources and resource groups",
          "Operation times and setup",
          "Route versions and effectivity",
          "Sub-contracted operations",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/production-control/routes-operations",
      },
      {
        slug: "shop-floor",
        title: "Shop Floor",
        summary:
          "Operator workspaces for clocking, job reporting and registrations.",
        features: [
          "Manufacturing execution UI",
          "Time and attendance",
          "Job card and bundle registrations",
          "Indirect activities tracking",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/production-control/manufacturing-execution",
      },
      {
        slug: "lean-manufacturing",
        title: "Lean Manufacturing",
        summary: "Kanban-driven pull production for high-volume environments.",
        features: [
          "Production flows and activities",
          "Fixed and event kanbans",
          "Takt-based scheduling",
          "Value stream mapping",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/production-control/lean-manufacturing-overview",
      },
      {
        slug: "quality-control",
        title: "Quality Control",
        summary:
          "Inspections, non-conformance and corrective actions integrated with production.",
        features: [
          "Quality orders and tests",
          "Non-conformance management",
          "Corrective and preventive actions",
          "Quality associations and triggers",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/enable-quality-management",
      },
    ],
    docHref:
      "https://learn.microsoft.com/en-us/dynamics365/supply-chain/production-control/production-control-home-page",
  },
  {
    slug: "customer-service",
    icon: HeadphonesIcon,
    title: "Customer Service",
    tagline: "Deliver effortless customer experiences",
    description:
      "Case management, service level agreements, knowledge base, and omnichannel engagement.",
    color: "bg-pink-500/10 text-pink-600",
    accent: "330 75% 55%",
    clientValue: [
      "Omnichannel engagement (chat, voice, social, email)",
      "AI-powered case routing and agent assist",
      "Self-service portals and chatbots",
      "Knowledge management with AI search",
      "Field service integration",
    ],
    usage: [
      "Reduce average handling time with agent productivity tools",
      "Improve first-contact resolution",
      "Deflect tickets with self-service",
      "Meet SLAs consistently with automated escalations",
    ],
    sections: [
      {
        slug: "case-management",
        title: "Case Management",
        summary:
          "End-to-end case lifecycle from creation to resolution.",
        features: [
          "Multi-channel case creation",
          "Case routing and assignment",
          "Parent/child cases and merging",
          "Resolution and customer satisfaction",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/customer-service/customer-service-hub-user-guide-cases",
      },
      {
        slug: "sla-management",
        title: "SLA Management",
        summary:
          "Define and enforce service level agreements with timers and escalations.",
        features: [
          "Standard and enhanced SLAs",
          "Pause/resume on case status",
          "Escalation actions",
          "SLA KPIs and dashboards",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/customer-service/define-service-level-agreements",
      },
      {
        slug: "knowledge-base",
        title: "Knowledge Base",
        summary:
          "Author, publish and surface knowledge articles to agents and customers.",
        features: [
          "Article authoring and approvals",
          "Versioning and translations",
          "Smart search and suggestions",
          "External portal publishing",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/customer-service/customer-service-hub-user-guide-knowledge-article",
      },
      {
        slug: "queues",
        title: "Queues",
        summary: "Route work items to the right agents and teams.",
        features: [
          "Public and private queues",
          "Unified routing and skills-based assignment",
          "Capacity profiles",
          "Workload distribution",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/customer-service/queues-omnichannel",
      },
      {
        slug: "entitlements",
        title: "Entitlements",
        summary:
          "Define what level of support a customer is eligible for.",
        features: [
          "Channel and product entitlements",
          "Term-based or hours-based",
          "Auto-decrement on case",
          "Entitlement templates",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/customer-service/create-entitlement-define-support-terms-customer",
      },
      {
        slug: "omnichannel",
        title: "Omnichannel",
        summary:
          "Engage customers on chat, voice, SMS, WhatsApp and social.",
        features: [
          "Live chat and async messaging",
          "Voice channel (PSTN)",
          "Social channels (FB, Twitter, WeChat)",
          "Real-time translation and sentiment",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/customer-service/introduction-omnichannel",
      },
    ],
    docHref: "https://learn.microsoft.com/en-us/dynamics365/customer-service/",
  },
  {
    slug: "project-operations",
    icon: BarChart3,
    title: "Project Operations",
    tagline: "Connect sales, resourcing, delivery and finance",
    description:
      "Project planning, resource management, time and expense tracking, and project accounting.",
    color: "bg-cyan-500/10 text-cyan-600",
    accent: "190 80% 45%",
    clientValue: [
      "Project quotes and contracts integrated with CRM",
      "Resource scheduling with skills and availability",
      "Mobile time and expense capture",
      "Revenue recognition and project accounting",
      "Project Power BI analytics out of the box",
    ],
    usage: [
      "Win more project work with accurate estimates",
      "Improve billable utilization",
      "Reduce revenue leakage",
      "Deliver projects on time and on budget",
    ],
    sections: [
      {
        slug: "project-planning",
        title: "Project Planning",
        summary:
          "Plan project structure, schedule and budget with WBS.",
        features: [
          "Work breakdown structure (WBS)",
          "Gantt scheduling",
          "Project templates",
          "Budget vs. actual tracking",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/project-operations/project-management/project-management-overview",
      },
      {
        slug: "resource-management",
        title: "Resource Management",
        summary:
          "Schedule the right people based on skills, role and availability.",
        features: [
          "Resource requests and fulfillment",
          "Skills, roles and proficiency",
          "Schedule board",
          "Booking vs. assignment",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/project-operations/resource-management/resource-management-overview",
      },
      {
        slug: "time-entry",
        title: "Time Entry",
        summary: "Capture time against projects from web and mobile.",
        features: [
          "Weekly time grid",
          "Mobile time entry",
          "Approvals and recall",
          "Time off integration",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/project-operations/time/time-overview",
      },
      {
        slug: "expense-management",
        title: "Expense Management",
        summary: "Submit, approve and reimburse project expenses.",
        features: [
          "Receipt capture with OCR",
          "Per diems and mileage",
          "Credit card import",
          "Policy enforcement",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/project-operations/expense/expense-overview",
      },
      {
        slug: "project-accounting",
        title: "Project Accounting",
        summary:
          "Project costing, revenue recognition and invoicing.",
        features: [
          "Cost and revenue profiles",
          "WIP and accrued revenue",
          "Project invoicing (T&M, fixed price)",
          "Intercompany projects",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/project-operations/project-accounting/project-accounting-overview",
      },
      {
        slug: "wbs",
        title: "Work Breakdown Structure",
        summary:
          "Decompose project work into manageable tasks with dependencies.",
        features: [
          "Hierarchical task structure",
          "Predecessors and dependencies",
          "Effort and cost estimates",
          "Baselines and revisions",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/project-operations/project-management/work-breakdown-structures",
      },
    ],
    docHref: "https://learn.microsoft.com/en-us/dynamics365/project-operations/",
  },
  {
    slug: "human-resources",
    icon: Users,
    title: "Human Resources",
    tagline: "Empower your people and transform HR",
    description:
      "Employee management, benefits, compensation, leave, performance, and learning management.",
    color: "bg-amber-500/10 text-amber-600",
    accent: "38 92% 50%",
    clientValue: [
      "Single source of truth for employee data",
      "Self-service for managers and employees",
      "Benefits and compensation administration",
      "Leave & absence with global policies",
      "Performance and learning in one platform",
    ],
    usage: [
      "Streamline onboarding and offboarding",
      "Improve employee engagement with self-service",
      "Standardize compensation and benefits globally",
      "Develop talent with continuous performance and learning",
    ],
    sections: [
      {
        slug: "employee-management",
        title: "Employee Management",
        summary:
          "Maintain worker records, positions and organizational structure.",
        features: [
          "Worker, position and job hierarchy",
          "Personal and employment details",
          "Document management",
          "Workflow-based changes",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/human-resources/hr-personnel-departments-jobs-positions",
      },
      {
        slug: "benefits",
        title: "Benefits",
        summary: "Configure and administer employee benefit plans.",
        features: [
          "Benefit plans and options",
          "Eligibility rules",
          "Open enrollment",
          "Provider integrations",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/human-resources/hr-benefits-overview",
      },
      {
        slug: "compensation",
        title: "Compensation",
        summary:
          "Fixed and variable compensation plans tied to performance.",
        features: [
          "Compensation grids and bands",
          "Merit, bonus and stock plans",
          "Compensation events",
          "Process workflows",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/human-resources/hr-compensation-overview",
      },
      {
        slug: "leave-and-absence",
        title: "Leave & Absence",
        summary:
          "Configure leave plans and let employees request time off.",
        features: [
          "Leave types and accrual rules",
          "Self-service leave requests",
          "Manager approvals",
          "Calendar integration",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/human-resources/hr-leave-and-absence-overview",
      },
      {
        slug: "performance",
        title: "Performance Management",
        summary:
          "Goals, reviews and continuous feedback to grow your team.",
        features: [
          "Goal setting and tracking",
          "Performance reviews",
          "Continuous feedback",
          "Calibration",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/human-resources/hr-develop-performance-management-overview",
      },
      {
        slug: "learning",
        title: "Learning",
        summary:
          "Course catalog, enrollments and learning history for employees.",
        features: [
          "Course catalog and curricula",
          "Self-service enrollment",
          "Completion tracking",
          "External LMS integration",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/human-resources/hr-learning-courses",
      },
    ],
    docHref: "https://learn.microsoft.com/en-us/dynamics365/human-resources/",
  },
  {
    slug: "commerce",
    icon: Globe,
    title: "Commerce",
    tagline: "Unify digital, in-store and back office commerce",
    description:
      "Unified commerce across POS, e-commerce, call center, and back office operations.",
    color: "bg-teal-500/10 text-teal-600",
    accent: "172 70% 38%",
    clientValue: [
      "Single platform for POS, e-commerce and call center",
      "Headless commerce APIs and SDKs",
      "AI-driven recommendations and personalization",
      "Loyalty, gift cards and promotions",
      "Clienteling for store associates",
    ],
    usage: [
      "Deliver consistent omnichannel customer experience",
      "Increase basket size with promotions and recommendations",
      "Empower store associates with mobile clienteling",
      "Centralize merchandising and pricing across channels",
    ],
    sections: [
      {
        slug: "point-of-sale",
        title: "Point of Sale",
        summary:
          "Modern POS for fixed and mobile devices with offline support.",
        features: [
          "Modern POS (MPOS) and Cloud POS",
          "Hardware station and peripherals",
          "Offline mode and sync",
          "Manager overrides and shift management",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/commerce/retail-modern-pos-overview",
      },
      {
        slug: "e-commerce",
        title: "E-commerce",
        summary:
          "B2C and B2B web storefronts built on a SaaS commerce platform.",
        features: [
          "Site builder and CMS",
          "Catalog, search and merchandising",
          "Checkout and payment connectors",
          "B2B accounts and quoting",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/commerce/online-store-overview",
      },
      {
        slug: "call-center",
        title: "Call Center",
        summary:
          "Take orders, manage continuity programs and process returns by phone.",
        features: [
          "Order entry workspace",
          "Continuity and installment billing",
          "Catalog source codes",
          "Fraud screening",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/commerce/call-center-functionality",
      },
      {
        slug: "merchandising",
        title: "Merchandising",
        summary:
          "Manage assortments, categories and product attributes across channels.",
        features: [
          "Channel assortments",
          "Category and product hierarchy",
          "Attribute groups",
          "Catalog publishing",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/commerce/category-management-product-attributes",
      },
      {
        slug: "pricing",
        title: "Pricing",
        summary:
          "Channel and customer-specific pricing, trade agreements and price groups.",
        features: [
          "Trade agreements",
          "Price groups and adjustments",
          "Affiliations and loyalty pricing",
          "Manual discounts",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/commerce/price-management",
      },
      {
        slug: "promotions",
        title: "Promotions",
        summary:
          "Build and target promotions, coupons and loyalty offers.",
        features: [
          "Discount types (mix & match, threshold, quantity)",
          "Coupons (single-use and multi-use)",
          "Channel and customer targeting",
          "Validation periods",
        ],
        docHref:
          "https://learn.microsoft.com/en-us/dynamics365/commerce/retail-discounts",
      },
    ],
    docHref: "https://learn.microsoft.com/en-us/dynamics365/commerce/",
  },
];

export const getD365Module = (slug) =>
  d365Modules.find((module) => module.slug === slug);

