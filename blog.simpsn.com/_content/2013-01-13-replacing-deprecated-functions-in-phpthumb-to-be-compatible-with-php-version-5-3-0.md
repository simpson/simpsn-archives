---
title: Replacing deprecated PHP functions
photo_url: http://www.techwench.com/wp-content/uploads/2011/02/All-about-Web-Development-Companies.jpg
---

### Deprecated PHP functions can really be the pits to deal with. Check out how I tackled a recent problem with phpThumb in a Wordpress plugin.

So first off, the fact that i'm just now dealing with this shows how far behind Rackspace has been with upgrading their server clusters in Cloud Sites. The good news is that a few months ago Rackspace renewed their commitment to their Cloud Sites platform and research and development has started back up. One of their first big milestones was upgrading their PHP 5.2 clusters to 5.3.

If you have upgraded to PHP 5.3, chances are high that you have experienced a few warnings or deprecated function messages, especially if you use plugins for a CMS like Wordpress. An example of deprecated code is the ereg family of functions, which are gone for good, as they were slower and felt less familiar than the alternative Perl-compatible preg family.

### Finding The Problem

Recently I had my first in-depth experience with a third party Wordpress plugin that completely broke down from deprecated functions. By break down, I mean a very image rich website having no images loading at all. The plugin that the website was utilizing heavily was the [NextGEN Gallery plugin](http://wordpress.org/extend/plugins/nextgen-gallery/). The only reason I used this plugin was because my client wanted to have control over uploading and changing pictures, so I needed a way to systematically control sizing and positioning so they didn't break the style of dozens of pages.

![PHP Deprecated Function](http://static.simp.sn/assets/deprecated.jpg)

This plugin utilized the [phpThumb](http://phpthumb.sourceforge.net/) image resizing functionality, which is no longer being supported by the developer. Luckily I was able to quickly trace the problem by jumping into the PHP error logs and find hundreds of errors being thrown for the [ereg()](http://php.net/manual/en/function.ereg.php) and [eregi()](http://php.net/manual/en/function.eregi.php) functions in the phpThumb.php core files.

After a quick google search I couldn't find anyone who had patched phpThumb.php so I set out to manually replace the deprecated functions myself. The best way to replace the ereg function family was to use the [pregmatch()](http://php.net/manual/en/function.preg-match.php) function. After a pretty tedious process of making over 100+ replacements in the 600+ lines of code I finally restored functionality of phpThumb, and all images began loading once again.

For anyone still using that old plugin, or any plugin that uses the phpThumb functionality and in desperate need for a fix, I have committed all the files to a [Github repo](https://github.com/simpson/phpThumb-for-PHP-5.3). I'm not really going to be supporting this repo so use at your own risk!

