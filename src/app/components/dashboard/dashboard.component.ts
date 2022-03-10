import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { campuses } from '../../services/campus-service';

type Location = {
    name: string,
    powerBILink: string
}

type SupportedPowerBILocations = Location[];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public supportedPowerBILocations: SupportedPowerBILocations = [
        { name: campuses.macclesfield.middlewoodCourt, powerBILink: 'http:someDomain.com' },
        { name: campuses.macclesfield.eastbrookHouse, powerBILink: 'http:someDomain.com' },
        { name: campuses.macclesfield.derwent, powerBILink: 'http:someDomain.com' }
    ];

    ngOnInit() {
        // do stuff
    }

    getSupportedLocation(locationName: string): Location {
        return this.supportedPowerBILocations.find(x => x.name === locationName);
    }

    isLocationSupported(locationName: string): boolean {
        const location: Location = this.getSupportedLocation(locationName);
        return (location && location.name.length > 0);
    }

    onLeaveAppConfirmed(powerBILink: string) {

    }

    openPowerBI() {
        const location: Location = this.getSupportedLocation(campuses.macclesfield.middlewoodCourt);
        if (location) {
            this.onLeaveAppConfirmed(location.powerBILink);
        }
    }
}
