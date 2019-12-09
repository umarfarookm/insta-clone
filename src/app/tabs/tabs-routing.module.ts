import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'feeds',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../feeds/feeds.module').then(m => m.FeedsModule)
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../search/search.module').then(m => m.SearchModule)
                    }
                ]
            },
            {
                path: 'newpost',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../newpost/newpost.module').then(m => m.NewpostModule)
                    }
                ]
            },
            {
                path: 'activities',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../activities/activities.module').then(m => m.ActivitiesModule)
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../profile/profile.module').then(m => m.ProfileModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/feeds',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/feeds',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TabsPageRoutingModule {
}
