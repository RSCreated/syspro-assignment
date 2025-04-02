const UTILS = {
    formatCurrency: (data, key) => {
        let amount = parseFloat(data[key]);

        if (isNaN(amount)) {
            return 'Invalid amount';
        }

        let formattedAmount = amount.toFixed(2).toString().split('.');

        formattedAmount[0] = formattedAmount[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return `R ${formattedAmount.join('.')}`;
    }
}