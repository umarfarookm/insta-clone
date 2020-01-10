import { Component } from '@angular/core';

@Component({
    selector: 'app-activities',
    templateUrl: 'activities.page.html',
    styleUrls: [ 'activities.page.scss' ]
})
export class ActivitiesPage {

    activitiesByTime = [
        {
            time: 'Last Week',
            activities: [
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx',
                    userDetail: 'John Watson and Warner Lin',
                    description: 'and others shared 10 photos',
                    time:'2m ago'
                }
            ]
        },
        {
            time: 'Last Month',
            activities: [
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ilM7E3aZocNUE01o1Gd-zd7A8668HlWeIblKAqGLcG-2OO0o',
                    userDetail: 'David Nick and Henderson',
                    description: 'and others shared 6 photos',
                    time:'2w ago'
                },
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ilM7E3aZocNUE01o1Gd-zd7A8668HlWeIblKAqGLcG-2OO0o',
                    userDetail: 'John Watson and Warner Lin',
                    description: 'and others shared 2 photos',
                    time:'2w ago'
                },
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx',
                    userDetail: 'David Nick and Henderson',
                    description: 'and others shared 9 photos',
                    time:'3w ago'
                }
            ]
        },
        {
            time: 'Earlier',
            activities: [
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ilM7E3aZocNUE01o1Gd-zd7A8668HlWeIblKAqGLcG-2OO0o',
                    userDetail: 'John Watson and Warner Lin',
                    description: 'and others shared 2 videos',
                    time:'3mo ago'
                },
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx',
                    userDetail: 'David Nick and Henderson',
                    description: 'and others shared 3 photos',
                    time:'5mo ago'
                },
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx',
                    userDetail: 'David Nick and Henderson',
                    description: 'and others shared 9 videos',
                    time:'6mo ago'
                }
            ]
        }
    ];

    suggestion = {
        header: 'Suggestions',
        users: [
            {
                imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                userName: 'jackson',
                name: 'Nick Jack',
                time:'3m ago',
                follow: false
            },
            {
                imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                userName: 'anderson',
                name: 'Micheal Andrew',
                time:'3w ago',
                follow: false
            },
            {
                imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                userName: 'muhammed',
                name: 'Muhammed Sathik',
                time:'6mo ago',
                follow: false
            }
        ]
    };

    constructor() {
    }

}
