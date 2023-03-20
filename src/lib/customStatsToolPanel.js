class CustomStatsToolPanel {
    constructor() { }
    init(params) {
        this.eGui = document.createElement('div')
        this.eGui.style.textAlign = 'center'
        // calculate stats when new rows loaded, i.e. onModelUpdated
        // var renderStats = () => (this.eGui.innerHTML = calculateStats(params))
        params.api.addEventListener('modelUpdated', renderStats)
        params.api.addEventListener('cellValueChanged', renderStats)
    }
    getGui() {
        return this.eGui
    }
    calculateStats(params) {
        let numExtendedCost = 0
        let numExtendedPrice = 0
        let numMaterials = 0
        let numService = 0
        let numFreight = 0
        let numTaxes = 0
        let numTotalSell = 0
        let numGrossProfit = 0
        let numGrossProfitDollars = 0

        params.api.forEachLeafNode(function (rowNode) {
            let data = rowNode.data

            if (data.extended_cost) numExtendedCost += data.extended_net_cost
            if (data.extended_price) numExtendedPrice += data.extended_net_price
            numMaterials += roundN(data.materials_sell, 2)
            numService += roundN(data.service_sell, 2)
            numFreight += roundN(data.freight_sell, 2)
            numTaxes += roundN(data.tax_amount, 2)
        })

        //Calculate the GP
        numGrossProfit = (1 - numExtendedCost / numExtendedPrice) * 100

        numGrossProfitDollars = numExtendedPrice - numExtendedCost

        numTotalSell =
            numExtendedPrice + numMaterials + numTaxes + numFreight + numService

        document.getElementById('materials_amount').value =
            '$' + formatMoney(numMaterials)

        document.getElementById('service_amount').value =
            '$' + formatMoney(numService)

        document.getElementById('freight_amount').value =
            '$' + formatMoney(numFreight)

        document.getElementById('tax_amount').value = '$' + formatMoney(numTaxes)

        return `<span>
                     <h3><i class="fa fa-calculator"></i> Recap</h3>
                     <dl style="font-size: small; padding: 20px 30px 10px 20px">
                     <dt style="padding-bottom: 15px">Extended Cost  : <br>$${formatMoney(
            numExtendedCost
        )}</dt>
                     <dt style="padding-bottom: 15px">Extended Price : <br>$${formatMoney(
            numExtendedPrice
        )}</dt>
                     <dt style="padding-bottom: 15px">         Materials : <br>$${formatMoney(
            numMaterials
        )}</dt>
                     <dt style="padding-bottom: 15px">         Service : <br>$${formatMoney(
            numService
        )}</dt>
                    <dt style="padding-bottom: 15px">        Freight: <br>$${formatMoney(
            numFreight
        )}</dt>
                     <dt style="padding-bottom: 15px">         Taxes : <br>$${formatMoney(
            numTaxes
        )}</dt>
                     <dt style="padding-bottom: 15px">     Total Sell: <br>$${formatMoney(
            numTotalSell
        )}</dt>
                     <hr class="largeLine">
                     <dt style="padding-bottom: 15px">Gross Profit : <b>${numGrossProfit.toFixed(
            2
        )}%</b></dt>
                     </dt>
                     <dt style="padding-bottom: 15px">Gross Profit : <b>$${formatMoney(numGrossProfitDollars)}</b></dt>
                    </dt>
                  </span>`
    }

