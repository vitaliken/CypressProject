/// <reference types="Cypress" />

it("Example sending the GET request", () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response)
        })
})

it.only("Example sending the POST request", () => {
    const requestBody = {
        action: "info",
        phone: "+380979442567",
        amount: 120,
        currency: "UAH",
        cardCvv: "111",
        card: "4552331448138217",
        cardExp: "0526",
        xref: "d51462962d6feb83451eee50a16f1ce1",
        _: 1662724438816,
    }

    const headersData = {
        cookie: 'pubkey=03c6cef221499039171572050eac5259; fp=2; lfp=9/9/2022, 2:52:54 PM; pa=1662724374202.56640.29726403448460736next.privat24.ua0.38368254982976513+2',
    }

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData,
    })
        .then((response) => {
            console.log(response.body)
        })
})

//https://jsonplaceholder.typicode.com/guide/