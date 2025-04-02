const dummyData = [
    {
        "invoiceNumber": 7,
        "customerName": "Global Innovations Ltd",
        "invoiceDate": "2024-11-15",
        "dueDate": "2024-12-15",
        "totalAmount": 1250.75,
        "amountPaid": 0.00,
        "outstandingBalance": 1250.75,
        "invoiceStatus": "Open"
    },
    {
        "invoiceNumber": 3,
        "customerName": "Sunrise Retailers",
        "invoiceDate": "2025-01-05",
        "dueDate": "2025-01-25",
        "totalAmount": 485.20,
        "amountPaid": 485.20,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 9,
        "customerName": "Tech Solutions Africa",
        "invoiceDate": "2024-09-22",
        "dueDate": "2024-10-22",
        "totalAmount": 2100.50,
        "amountPaid": 2100.50,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 1,
        "customerName": "Alpha Industries",
        "invoiceDate": "2025-02-10",
        "dueDate": "2025-03-10",
        "totalAmount": 799.99,
        "amountPaid": 300.00,
        "outstandingBalance": 499.99,
        "invoiceStatus": "Partially Paid"
    },
    {
        "invoiceNumber": 5,
        "customerName": "Savannah Exports",
        "invoiceDate": "2024-12-28",
        "dueDate": "2025-01-28",
        "totalAmount": 1560.00,
        "amountPaid": 1560.00,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 10,
        "customerName": "United Builders",
        "invoiceDate": "2025-03-15",
        "dueDate": "2025-04-15",
        "totalAmount": 320.80,
        "amountPaid": 0.00,
        "outstandingBalance": 320.80,
        "invoiceStatus": "Open"
    },
    {
        "invoiceNumber": 4,
        "customerName": "Kwame Trading",
        "invoiceDate": "2024-10-20",
        "dueDate": "2024-11-20",
        "totalAmount": 915.35,
        "amountPaid": 915.35,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 8,
        "customerName": "Zulu Crafts",
        "invoiceDate": "2025-01-22",
        "dueDate": "2025-02-22",
        "totalAmount": 670.10,
        "amountPaid": 670.10,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 2,
        "customerName": "Bambelela Services",
        "invoiceDate": "2024-11-01",
        "dueDate": "2024-12-01",
        "totalAmount": 1890.99,
        "amountPaid": 1890.99,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 6,
        "customerName": "Ubuntu Distributors",
        "invoiceDate": "2025-02-28",
        "dueDate": "2025-03-28",
        "totalAmount": 540.00,
        "amountPaid": 200.00,
        "outstandingBalance": 340.00,
        "invoiceStatus": "Partially Paid"
    },
    // --- Added 20 new random items below ---
    {
        "invoiceNumber": 11,
        "customerName": "Naledi Enterprises",
        "invoiceDate": "2024-08-12",
        "dueDate": "2024-09-12",
        "totalAmount": 875.50,
        "amountPaid": 875.50,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 12,
        "customerName": "Moya Holdings",
        "invoiceDate": "2025-04-03",
        "dueDate": "2025-05-03",
        "totalAmount": 1420.00,
        "amountPaid": 0.00,
        "outstandingBalance": 1420.00,
        "invoiceStatus": "Open"
    },
    {
        "invoiceNumber": 13,
        "customerName": "Imani Solutions",
        "invoiceDate": "2024-07-20",
        "dueDate": "2024-08-20",
        "totalAmount": 399.99,
        "amountPaid": 399.99,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 14,
        "customerName": "Thabo Investments",
        "invoiceDate": "2025-03-22",
        "dueDate": "2025-04-22",
        "totalAmount": 2150.75,
        "amountPaid": 1000.00,
        "outstandingBalance": 1150.75,
        "invoiceStatus": "Partially Paid"
    },
    {
        "invoiceNumber": 15,
        "customerName": "Lerato Designs",
        "invoiceDate": "2024-11-05",
        "dueDate": "2024-12-05",
        "totalAmount": 620.50,
        "amountPaid": 620.50,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 16,
        "customerName": "Mandela Enterprises",
        "invoiceDate": "2025-01-18",
        "dueDate": "2025-02-18",
        "totalAmount": 1780.00,
        "amountPaid": 1780.00,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 17,
        "customerName": "Zola Holdings",
        "invoiceDate": "2024-09-30",
        "dueDate": "2024-10-30",
        "totalAmount": 450.20,
        "amountPaid": 0.00,
        "outstandingBalance": 450.20,
        "invoiceStatus": "Open"
    },
    {
        "invoiceNumber": 18,
        "customerName": "Siyabonga Traders",
        "invoiceDate": "2025-02-05",
        "dueDate": "2025-03-05",
        "totalAmount": 985.75,
        "amountPaid": 500.00,
        "outstandingBalance": 485.75,
        "invoiceStatus": "Partially Paid"
    },
    {
        "invoiceNumber": 19,
        "customerName": "Nomusa Services",
        "invoiceDate": "2024-12-10",
        "dueDate": "2025-01-10",
        "totalAmount": 1200.00,
        "amountPaid": 1200.00,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 20,
        "customerName": "Ayanda Group",
        "invoiceDate": "2025-03-01",
        "dueDate": "2025-03-31",
        "totalAmount": 720.99,
        "amountPaid": 0.00,
        "outstandingBalance": 720.99,
        "invoiceStatus": "Open"
    },
    {
        "invoiceNumber": 21,
        "customerName": "Refilwe Solutions",
        "invoiceDate": "2024-10-15",
        "dueDate": "2024-11-15",
        "totalAmount": 1100.00,
        "amountPaid": 1100.00,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 22,
        "customerName": "Tshepo Holdings",
        "invoiceDate": "2025-01-28",
        "dueDate": "2025-02-28",
        "totalAmount": 1950.50,
        "amountPaid": 1950.50,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 23,
        "customerName": "Neo Enterprises",
        "invoiceDate": "2024-08-05",
        "dueDate": "2024-09-05",
        "totalAmount": 580.75,
        "amountPaid": 0.00,
        "outstandingBalance": 580.75,
        "invoiceStatus": "Open"
    },
    {
        "invoiceNumber": 24,
        "customerName": "Palesa Traders",
        "invoiceDate": "2025-03-10",
        "dueDate": "2025-04-10",
        "totalAmount": 825.00,
        "amountPaid": 400.00,
        "outstandingBalance": 425.00,
        "invoiceStatus": "Partially Paid"
    },
    {
        "invoiceNumber": 25,
        "customerName": "Kabelo Investments",
        "invoiceDate": "2024-11-22",
        "dueDate": "2024-12-22",
        "totalAmount": 1340.20,
        "amountPaid": 1340.20,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 26,
        "customerName": "Boitumelo Services",
        "invoiceDate": "2025-02-15",
        "dueDate": "2025-03-15",
        "totalAmount": 690.99,
        "amountPaid": 690.99,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 27,
        "customerName": "Katlego Group",
        "invoiceDate": "2024-09-10",
        "dueDate": "2024-10-10",
        "totalAmount": 1600.00,
        "amountPaid": 0.00,
        "outstandingBalance": 1600.00,
        "invoiceStatus": "Open"
    },
    {
        "invoiceNumber": 28,
        "customerName": "Lebo Holdings",
        "invoiceDate": "2025-01-02",
        "dueDate": "2025-02-02",
        "totalAmount": 375.50,
        "amountPaid": 375.50,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 29,
        "customerName": "Thandi Traders",
        "invoiceDate": "2024-12-20",
        "dueDate": "2025-01-20",
        "totalAmount": 950.75,
        "amountPaid": 950.75,
        "outstandingBalance": 0.00,
        "invoiceStatus": "Paid"
    },
    {
        "invoiceNumber": 30,
        "customerName": "Sipho Investments",
        "invoiceDate": "2025-03-28",
        "dueDate": "2025-04-28",
        "totalAmount": 1280.00,
        "amountPaid": 600.00,
        "outstandingBalance": 680.00,
        "invoiceStatus": "Partially Paid"
    }
];
