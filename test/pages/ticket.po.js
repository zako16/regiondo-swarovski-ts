'use strict'

var Ticket = function() {
    browser.url('/swarovski-kristallwelten-abendticket-1-7-31-8-2017/');
}

Ticket.prototype = Object.create({}, {
    sliderBullets: {get: function(){ return $$('.product-img-box .swiper-pagination-bullets > span.bullet'); }},
    sliderNext: {get: function(){ return $('div.pp-images div.pp-next'); }},
    sliderPrev: {get: function(){ return $('div.pp-images div.pp-prev'); }},
    day: {get: function(){ return $('table.ui-datepicker-calendar td[title="Available"]'); }},
    selectAdultCount: {get: function(){ return $('div#available-tickets-block > table > tbody > tr:nth-of-type(1) > td > select'); }},
    selectChildrenCount: {get: function(){ return $('div#available-tickets-block > table > tbody > tr:nth-of-type(2) > td > select'); }},
    addToCartButton: {get: function(){ return $('button[title="Add to Shopping Cart"]'); }},
    addToCartInfoModal: {get: function(){ return $('div#add_to_cart_content'); }},
    goToCartButton: {get: function(){ return this.addToCartInfoModal.$('div.buttons > a:nth-child(2)'); }},
    removeButton: {get: function(){ return $('a[title="Remove"]'); }},
    goToCheckoutPageButton: {get: function(){ return $('button[onclick="goToCheckoutpage();"]'); }},
    emptyCartDiv: { get: function(){ return $('div#js-emptycart'); }},
    firstnameInput: { get: function(){ return $('input[name="firstname"]'); }},
    lastnameInput: { get: function(){ return $('input[name="lastname"]'); }},
    emailInput: { get: function(){ return $('input[name="email"]'); }},
    emailConfirmInput: { get: function(){ return $('input[name="email_confirm"]'); }},
    saveAddressButton: { get: function(){ return $('div#sc_address_save'); }},
    placeOrderButton: { get: function(){return $('div#sc_place_order')}},
});

module.exports = Ticket;