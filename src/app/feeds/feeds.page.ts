import { Component } from '@angular/core';

@Component({
    selector: 'app-feeds',
    templateUrl: 'feeds.page.html',
    styleUrls: [ 'feeds.page.scss' ]
})
export class FeedsPage {

    statusList = [
        {
            name: 'John Watson',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx'
        },
        {
            name: 'Kenny Handerson',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRsaj20eAE3_QN-Afw6GUAcvWVVTA9PlqeVuwB5pIH41qv5kxZ'
        },
        {
            name: 'David Nick',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ilM7E3aZocNUE01o1Gd-zd7A8668HlWeIblKAqGLcG-2OO0o'
        },
        {
            name: 'Warner Lin',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0FoSc8DAoqb-_Nve8lxk_lgtnSuAeqGA-zYjC6tENDkTaTrD7'
        },
        {
            name: 'Anderson',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_k8OI5LCICslf_OzVMBzMMA7GblWc4iL0hCL0m7jXON3GNDwH'
        }
    ];
    feedList = [
        {
            userName: 'David Nick',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ilM7E3aZocNUE01o1Gd-zd7A8668HlWeIblKAqGLcG-2OO0o',
            userPlace: 'Houstan',
            slides: [
                {
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR569djObZYNcghtumCNFRidZcAOouZs7lz-tGpjqFDUK68DDg2'
                },
                {
                    image: 'https://i.pinimg.com/564x/1f/73/79/1f7379a8f30b304fca4820504fa09557.jpg'
                }
            ],
            likes: 10,
            feedText: 'Lunch @Houstan',
            time: 'Just Now'
        },
        {
            userName: 'John Watson',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx',
            userPlace: 'Mumbai',
            slides: [
                {
                    image: 'http://thedreamwithinpictures.com/wp-content/uploads/2015/09/64ffc__11261919_650652038398443_1773559261_n.jpg'
                },
                {
                    image: 'https://cdn.guff.com/site_2/media/17000/16381/items/20a68e811cb075b5dd0cc9a7.jpg'
                },
                {
                    image: 'https://petapixel.com/assets/uploads/2015/09/Z.jpg'
                },
                {
                    image: 'https://petapixel.com/assets/uploads/2015/09/11348363_121691131510970_596893135_n.jpg'
                }
            ],
            likes: 323,
            feedText: 'From Mumbai',
            time: '3 Hours ago'
        },
        {
            userName: 'Anderson',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_k8OI5LCICslf_OzVMBzMMA7GblWc4iL0hCL0m7jXON3GNDwH',
            userPlace: 'Newyork',
            slides: [
                {
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVd57Rh4SLipxD_I4ikAjXk4A6B9b69SoyoiKa0Y3YC-Vc31iC'
                },
                {
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2XXwZeGmG2LjAYFwnFS0KgHmHo0GP8pp2_VIKMYA_lYW79t43'
                },
                {
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnoRsDHvSC2mYgY2HDNgMrkW3vPWO5b1P--snWW-ZGSah71MaL'
                }
            ],
            likes: 120,
            feedText: 'Lovely places',
            time: '3 Days ago'
        }
    ];

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    constructor() {
    }

}
