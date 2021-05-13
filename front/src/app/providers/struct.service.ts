import { Injectable } from '@angular/core';
import { result } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StructService {
  serviceprovidertypes = [
    {serviceprovidertype: "person", title: "Person"},
    {serviceprovidertype: "company", title: "Company"},
  ]

  public servicetypes = [
    {name: "home",       title: "Home Services"},
    {name: "vehicle",    title: "Vehicle Services"},
    {name: "personal",   title: "Personal Services"},
    {name: "education",  title: "Education Services"},

    {name: "other", title: "Other Services"},
  ];

  services = [
    {servicetype: "home", name: "electrician",  title: "Electrician", plural: "Electricians"},
    {servicetype: "home", name: "plumber",      title: "Plumber",     plural: "Plumbers"},

    {servicetype: "vehicle",  name: "repair",  title: "Repair", plural: "Repairs"},
    {servicetype: "vehicle",  name: "wash",    title: "Wash",   plural: "Washes"},
  ]

  constructor() { }

  public get_services(servicetype){

    var result = [];

    console.log('get_services servicetype: ' + servicetype);

    this.services.forEach(service => {

      console.log('get_services service.servicetype: ' + service.servicetype);
      if (service.servicetype == servicetype)
        result.push(service);
    });

    return result;
  }

  public get_servicetypes(){
    return this.servicetypes;
  }
}
