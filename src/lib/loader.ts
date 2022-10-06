import jQuery from 'jquery';

if (typeof window !== `undefined`) {
  (window as any)[`jQuery`] = jQuery;
  (window as any)[`$`] = jQuery;
}
