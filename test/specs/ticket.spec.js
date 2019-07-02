var Ticket = require('../pages/ticket.po.js');
const url = require('url');

describe('Dashboard account tab', function () {
    var ticket;

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
        const cartUrl = '/checkout/cart/index';
        expect(url.parse(browser.getUrl()).pathname).toBe(cartUrl);
    });
});