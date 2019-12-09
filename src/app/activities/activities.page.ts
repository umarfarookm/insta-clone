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
                    imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    userDetail: 'Item Avatar',
                    description: 'Listen, I\'ve had a pretty messed'
                }
            ]
        },
        {
            time: 'Last Month',
            activities: [
                {
                    imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    userDetail: 'Item Avatar',
                    description: 'Listen, I\'ve had a pretty messed'
                },
                {
                    imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    userDetail: 'Item Avatar',
                    description: 'Listen, I\'ve had a pretty messed'
                },
                {
                    imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    userDetail: 'Item Avatar',
                    description: 'Listen, I\'ve had a pretty messed'
                }
            ]
        },
        {
            time: 'Earlier',
            activities: [
                {
                    imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    userDetail: 'Item Avatar',
                    description: 'Listen, I\'ve had a pretty messed'
                },
                {
                    imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    userDetail: 'Item Avatar',
                    description: 'Listen, I\'ve had a pretty messed'
                },
                {
                    imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    userDetail: 'Item Avatar',
                    description: 'Listen, I\'ve had a pretty messed'
                },
                {
                    imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    userDetail: 'Item Avatar',
                    description: 'Listen, I\'ve had a pretty messed'
                },
                {
                    imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                    userDetail: 'Item Avatar',
                    description: 'Listen, I\'ve had a pretty messed'
                }
            ]
        }
    ];

    suggestion = {
        header: 'Suggestions',
        users: [
            {
                imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                userName: 'username1',
                name: 'Full Name 1',
                follow: false
            },
            {
                imageUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
                userName: 'username2',
                name: 'Full Name 2',
                follow: false
            }
        ]
    };

    constructor() {
    }

}
