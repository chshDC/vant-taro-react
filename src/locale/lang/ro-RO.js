"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'Nume',
    tel: 'Telefon',
    save: 'Salvează',
    confirm: 'Confirmă',
    cancel: 'Anulează',
    delete: 'Șterge',
    complete: 'Finalizează',
    loading: 'Încărcare...',
    telEmpty: 'Te rugăm să completezi telefonul',
    nameEmpty: 'Te rugăm să completezi numele',
    nameInvalid: 'Nume incorect',
    confirmDelete: 'Ești sigur ca vrei sa stergi?',
    telInvalid: 'Număr de telefon invalid',
    vanCalendar: {
        end: 'Sfârșit',
        start: 'Început',
        title: 'Calendar',
        startEnd: 'Început/Sfârsit',
        weekdays: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
        monthTitle: function (year, month) { return year + "/" + month; },
        rangePrompt: function (maxRange) { return "Alege maxim " + maxRange + " zile"; },
    },
    vanCascader: {
        select: 'Selectați',
    },
    vanContactCard: {
        addText: 'Adaugă informațiile de contact',
    },
    vanContactList: {
        addText: 'Adaugă contact nou',
    },
    vanPagination: {
        prev: 'Precedenta',
        next: 'Urmatoarea',
    },
    vanPullRefresh: {
        pulling: 'Trage pentru a da împrospăta...',
        loosing: 'Eliberează pentru a împrospăta...',
    },
    vanSubmitBar: {
        label: 'Total：',
    },
    vanCoupon: {
        unlimited: 'Nelimitat',
        discount: function (discount) { return discount * 10 + "% discount"; },
        condition: function (condition) { return "Cel pu\u021Bin " + condition; },
    },
    vanCouponCell: {
        title: 'Cupon',
        tips: 'Fără cupoane',
        count: function (count) { return "Ai " + count + " cupoane"; },
    },
    vanCouponList: {
        empty: 'Fără cupoane',
        exchange: 'Schimbă',
        close: 'Închide',
        enable: 'Disponibil',
        disabled: 'Indisponibil',
        placeholder: 'Cod cupon',
    },
    vanAddressEdit: {
        area: 'Zonă',
        postal: 'Cod postal',
        areaEmpty: 'Te rugăm sa selectezi o zona de primire',
        addressEmpty: 'Adresa nu poate fi goală',
        postalEmpty: 'Cod postal invalid',
        defaultAddress: 'Setează ca adresă de pornire',
        telPlaceholder: 'Telefon',
        namePlaceholder: 'Nume',
        areaPlaceholder: 'Zonă',
    },
    vanAddressEditDetail: {
        label: 'Adresă',
        placeholder: 'Adresă',
    },
    vanAddressList: {
        add: 'Adaugă adresă nouă',
    },
};
