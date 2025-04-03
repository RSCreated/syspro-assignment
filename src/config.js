const CONFIG = {
    pageSize: 5,
    gridConfig: {
        mobile: true,
        resizable: true,
        responsive: true,
        responsiveAutoFit: true,
        resizable: {
            columns: true
        },
        pageable: {
            pageSizes: true,
        },
        sortable: true,
        scrollable: { virtual: true },
        filterable: {
            mode: "row"
        },
        selectable: "multiple, row",
        persistSelection: true,
        columnMenu: {
            columns: true,
            sortable: false,
            filterable: false,
            groupable: false,
            lockable: false,
            stickable: false,
            autoSize: false,
            clearAllFilters: false
        },
        columnMenuInit(e) {
            let item = e.container.find('input[data-field="invoiceNumber"]').parent();
            item.addClass("hidden");
        },
        columns: [
            {
                field: "invoiceNumber", title: "Invoice Number", width: 60, filterable: false, columnMenu: true,
                attributes: {
                    style: "text-align: center;"
                }
            },
            {
                field: "customerName", title: "Customer", width: 150, columnMenu: false,
                filterable: {
                    cell: {
                        enabled: true,
                        showOperators: false,
                        operator: "contains",
                        template(args) {
                            args.element.kendoTextBox({
                                placeholder: "Search customer name",
                                clearButton: true
                            });
                        }
                    },
                },
            },
            { field: "invoiceDate", title: "Invoice Date", format: "{0: d MMM yyyy }", width: 40, filterable: false, columnMenu: false },
            {
                field: "dueDate", title: "Due Date", format: "{0: d MMM yyyy }", width: 40, columnMenu: false, filterable: {
                    cell: {
                        enabled: true,
                        showOperators: false,
                        operators: {
                            date: {
                                gte: "Is after or equal to",
                                lte: "Is before or equal to",
                                isnull: "Is null",
                                isnotnull: "Is not null"
                            }
                        }
                    },
                },
            },
            { field: "totalAmount", title: "Total Amount", template: "#= UTILS.formatCurrency(data, 'totalAmount')#", width: 40, filterable: false, columnMenu: false },
            { field: "amountPaid", title: "Amount Paid", template: "#= UTILS.formatCurrency(data, 'amountPaid')#", width: 40, filterable: false, columnMenu: false },
            { field: "outstandingBalance", title: "Outstanding Balance", template: "#= UTILS.formatCurrency(data, 'outstandingBalance')#", width: 40, filterable: false, columnMenu: false },
            { field: "invoiceStatus", title: "Invoice Status", width: 40, filterable: false, columnMenu: false }
        ],
    }
}