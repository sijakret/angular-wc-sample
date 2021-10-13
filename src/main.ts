import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

import { DomElementSchemaRegistry, ElementSchemaRegistry } from '@angular/compiler'
import { SchemaMetadata } from '@angular/core';

const MY_CUSTOM_PROPERTIES_SCHEMA = {
  'my-prefix-custom-element': {
    'bar': 'string'
  }
};
export class CustomDomElementSchemaRegistry extends DomElementSchemaRegistry {
  constructor() {
    super();
  }
hasElement(tagName: string, schemaMetas: SchemaMetadata[]): boolean {
  console.log('test'
  )
    return (MY_CUSTOM_PROPERTIES_SCHEMA as any)[tagName.toLowerCase()].indexOf(tagName) > -1 || 
         super.hasElement(tagName, schemaMetas);
  }
hasProperty(tagName: string, propName: string, schemaMetas: SchemaMetadata[]): boolean {
    const elementProperties = (MY_CUSTOM_PROPERTIES_SCHEMA as any)[tagName.toLowerCase()];
    return (elementProperties && elementProperties[propName]) || 
        super.hasProperty(tagName, propName, schemaMetas);
  }
}
platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [{ provide: ElementSchemaRegistry, useClass: CustomDomElementSchemaRegistry, deps: [] }]
});