/// <reference types="Cypress" />

it("Example sending the GET request", () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response)
        })
})

//xref: "d51462962d6feb83451eee50a16f1ce1" can be expired

//Example HTTP POST request with expect verification of response
it("Example sending the POST request", () => {
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
    }).then((response) => {
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.equal('120.0')
            console.log(response)
        })
})

//Example HTTP POST request with should verification of response
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
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })
})