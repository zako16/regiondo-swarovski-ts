var Ticket = require('../pages/ticket.po.js');
const url = require('url');

describe('Dashboard account tab', function () {
    var ticket;
    const checkoutPageUrl = '/checkoutsimple/onepage/index/step/address';
    const cartUrl = '/checkout/cart/index';
    const paymentUrl = '/checkoutsimple/onepage/index/step/payment';
    const user = {name: 'Hermione', surname: 'Granger', email: 'hermione.granger@magic.world', phone: '19091979'};

    beforeEach(function () {
        ticket = new Ticket();
    });

    it("click to next button of slider", function () {
        if (ticket.sliderBullets.length > 1) {
            ticket.sliderNext.click();
            expect(ticket.sliderBullets[1].getAttribute('class')).toContain('bullet-active');
        };
    });

    it("click to calendar and open cart info modal page", function () {
        ticket.day.click();
        ticket.selectAdultCount.click();
        browser.pause(500);
        ticket.selectAdultCount.selectByIndex(2);
        ticket.addToCartButton.click();
        ticket.addToCartInfoModal.waitForDisplayed(4000);
        expect(ticket.addToCartInfoModal.isDisplayed()).toBe(true);
    });

    it("click to calendar, open cart info modal page and go to cart page", function () {
        ticket.day.click();
        ticket.selectAdultCount.click();
        browser.pause(500);
        ticket.selectAdultCount.selectByIndex(2);
        ticket.addToCartButton.click();
        ticket.addToCartInfoModal.waitForDisplayed(4000);
        ticket.goToCartButton.click();
        expect(url.parse(browser.getUrl()).pathname).toBe(cartUrl);
    });

    it("check ticket, go to proceed page", function () {
        ticket.day.click();
        ticket.selectAdultCount.click();
        browser.pause(500);
        ticket.selectAdultCount.selectByIndex(2);
        ticket.addToCartButton.click();
        ticket.addToCartInfoModal.waitForDisplayed(4000);
        ticket.goToCartButton.click();
        if (url.parse(browser.getUrl()).pathname === cartUrl){
            ticket.goToCheckoutPageButton.click();
            expect(url.parse(browser.getUrl()).pathname).toBe(checkoutPageUrl);
        }
    });

    it("check ticket, go to proceed page and fill user data", function () {
        ticket.day.click();
        ticket.selectAdultCount.click();
        browser.pause(500);
        ticket.selectAdultCount.selectByIndex(2);
        ticket.addToCartButton.click();
        ticket.addToCartInfoModal.waitForDisplayed(4000);
        ticket.goToCartButton.click();
        if (url.parse(browser.getUrl()).pathname === cartUrl){
            ticket.goToCheckoutPageButton.click();
            ticket.firstnameInput.click();
            ticket.firstnameInput.setValue(user.name);
            ticket.lastnameInput.click();
            ticket.lastnameInput.setValue(user.surname);
            ticket.emailInput.click();
            ticket.emailInput.setValue(user.email);
            ticket.emailConfirmInput.click();
            ticket.emailConfirmInput.setValue(user.email);
            expect(url.parse(browser.getUrl()).pathname).toBe(checkoutPageUrl);
        }
    });

    it("check ticket, go to proceed page, fill user data and go to payment page", function () {
        ticket.day.click();
        ticket.selectAdultCount.click();
        browser.pause(500);
        ticket.selectAdultCount.selectByIndex(2);
        ticket.addToCartButton.click();
        ticket.addToCartInfoModal.waitForDisplayed(4000);
        ticket.goToCartButton.click();
        if (url.parse(browser.getUrl()).pathname === cartUrl){
            ticket.goToCheckoutPageButton.click();
            ticket.firstnameInput.click();
            ticket.firstnameInput.setValue(user.name);
            ticket.lastnameInput.click();
            ticket.lastnameInput.setValue(user.surname);
            ticket.emailInput.click();
            ticket.emailInput.setValue(user.email);
            ticket.emailConfirmInput.click();
            ticket.emailConfirmInput.setValue(user.email);
            ticket.saveAddressButton.click();
            ticket.placeOrderButton.waitForDisplayed();
            expect(url.parse(browser.getUrl()).pathname).toBe(paymentUrl);
        }
    });
});