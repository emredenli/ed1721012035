var express = require('express');
var router = express.Router();
const anaSayfa = function (req, res, next) {
  res.render('mekanlar-liste',
    {
      'baslik': 'Anasayfa',
      'footer': 'Emre DENLİ 2020',
      'sayfaBaslik': {
        'siteAd': 'Mekan32',
        'aciklama': '  Isparta Civarında Mekanları Keşfedin :)'
      },
      'mekanlar': [
        {
          'ad': 'Starbucks',
          'adres': 'Centrum Garden',
          'puan': '4',
          'imkanlar': ['Kahve', 'Çay', 'Pasta'],
          'mesafe': '10km'
        },
        {
          'ad': 'Baraqah',
          'adres': 'Fatih Mahallesi, Ertokuş Cd. No: 16',
          'puan': '4',
          'imkanlar': ['Kahve', 'Çay', 'Pasta'],
          'mesafe': '5km'
        },
        {
          'ad': 'Miskin Cafe',
          'adres': 'Fatih Mah. 4520 Sok.',
          'puan': '5',
          'imkanlar': ['Kahve', 'Çay', 'Pasta'],
          'mesafe': '20km'
        },
        {
          'ad': 'Friends Cafe',
          'adres': '1001. Sokak, 1004 Kutlubey',
          'puan': '3',
          'imkanlar': ['Kahve', 'Çay', 'Pasta'],
          'mesafe': '15km'
        },
        {
          'ad': 'Kestane Kafe',
          'adres': 'Bahçelievler Mah. 3036 Sok. 26',
          'puan': '4',
          'imkanlar': ['Kahve', 'Çay', 'Pasta'],
          'mesafe': '8km'
        },
        {
          'ad': 'Kahve Diyarı',
          'adres': 'Çınar Sokak, 13 Kutlubey',
          'puan': '4',
          'imkanlar': ['Kahve', 'Çay', 'Pasta'],
          'mesafe': '8km'
        }     
      ]
    }
  );
}
const mekanBilgisi = function (req, res, next) {
  res.render('mekan-detay', { 
      'baslik':'Mekan Bilgisi',
      'footer':'Emre DENLİ 2020',
      'sayfaBaslik':'Starbucks',
      'mekanBilgisi':{
        'ad':'Starbucks',
        'adres':'Centrum Garden',
        'puan':4,
        'imkanlar':['Kahve','Paste','Kek'],
        'koordinatlar':{
          'enlem':37.781885,
          'boylam':30.566034
        },
        'saatler':[
          {
             'gunler':'Pazartesi-Cuma',
             'acilis':'7.00',
             'kapanis':'23.00',
             'kapali':false
          },
          {
            'gunler':'Cumartesi',
            'acilis':'9.00',
            'kapanis':'22.30',
            'kapali':false
          },
          {
            'gunler':'Pazar',         
            'kapali':true
          }
      ],
      'yorumlar':[
          {
            'yorumYapan':'Emre Denli',
            'puan':3,
            'tarih':'1 Aralık 2020',
            'yorumMetni':'Kahveler güzel.'
          },
          {
            'yorumYapan':'Hasan Denli',
            'puan':5,
            'tarih':'2 Aralık 2020',
            'yorumMetni':'Buranın Kahveleri Harika!'
          },
          {
            'yorumYapan':'Eray Denli',
            'puan':5,
            'tarih':'3 Aralık 2020',
            'yorumMetni':'Kahveler Harika!'
          }
       ]
    }
  });
}

const yorumEkle = function (req, res, next) {
  res.render('yorum-ekle', 
  { title: 'Yorum Ekle',
  'footer':'Emre DENLİ 2020'
 });
  
}

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}