"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Name',
    tel: 'Telefon',
    save: 'Speichern',
    confirm: 'Bestätigen',
    cancel: 'Abbrechen',
    delete: 'Löschen',
    complete: 'Complete',
    loading: 'Laden...',
    telEmpty: 'Bitte das Telefon ausfüllen',
    nameEmpty: 'Bitte den Name angeben',
    nameInvalid: 'Ungültiger Name',
    confirmDelete: 'Bist du sicher, dass du löschen möchtest?',
    telInvalid: 'Ungültige Telefonnummer',
    vanCalendar: {
        end: 'Ende',
        start: 'Start',
        title: 'Kalender',
        startEnd: 'Start/Ende',
        weekdays: ['So', 'Mo', 'Di', 'Mo', 'Do', 'Fr', 'Sa'],
        monthTitle: function (year, month) { return year + "/" + month; },
        rangePrompt: function (maxRange) { return "W\u00E4hle nicht mehr als " + maxRange + " Tage"; },
    },
    vanCascader: {
        select: 'Wählen',
    },
    vanContactCard: {
        addText: 'Kontaktinformationen hinzufügen',
    },
    vanContactList: {
        addText: 'Neuen Kontakt hinzufügen',
    },
    vanPagination: {
        prev: 'Vorherige',
        next: 'Nächste',
    },
    vanPullRefresh: {
        pulling: 'Zum Aktualisieren herunterziehen...',
        loosing: 'Loslassen zum Aktualisieren...',
    },
    vanSubmitBar: {
        label: 'Total：',
    },
    vanCoupon: {
        unlimited: 'Unbegrenzt',
        discount: function (discount) { return discount * 10 + "% Rabatt"; },
        condition: function (condition) { return "Mindestens " + condition; },
    },
    vanCouponCell: {
        title: 'Coupon',
        tips: 'Keine Coupons',
        count: function (count) { return "Du hast " + count + " Coupons"; },
    },
    vanCouponList: {
        empty: 'Keine Coupons',
        exchange: 'Austauschen',
        close: 'Schließen',
        enable: 'Verfügbar',
        disabled: 'Nicht verfügbar',
        placeholder: 'Couponcode',
    },
    vanAddressEdit: {
        area: 'Standort',
        postal: 'PLZ',
        areaEmpty: 'Bitte deinen Ort angeben',
        addressEmpty: 'Adresse darf nicht leer sein',
        postalEmpty: 'Falsche Postleitzahl',
        defaultAddress: 'Als Standardadresse festgelegen',
        telPlaceholder: 'Telefon',
        namePlaceholder: 'Name',
        areaPlaceholder: 'Ort',
    },
    vanAddressEditDetail: {
        label: 'Adresse',
        placeholder: 'Adresse',
    },
    vanAddressList: {
        add: 'Neue Adresse hinzufügen',
    },
};
