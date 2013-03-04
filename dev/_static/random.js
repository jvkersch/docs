
   function insert_gallery() {
       var images = ['http://scikit-image.org/docs/dev/_images/plot_16bitbilateral.png', 'http://scikit-image.org/docs/dev/_images/plot_canny.png', 'http://scikit-image.org/docs/dev/_images/plot_circular_hough_transform.png', 'http://scikit-image.org/docs/dev/_images/plot_contours.png', 'http://scikit-image.org/docs/dev/_images/plot_convex_hull.png', 'http://scikit-image.org/docs/dev/_images/plot_corner.png', 'http://scikit-image.org/docs/dev/_images/plot_daisy.png', 'http://scikit-image.org/docs/dev/_images/plot_denoise.png', 'http://scikit-image.org/docs/dev/_images/plot_entropy.png', 'http://scikit-image.org/docs/dev/_images/plot_equalize.png', 'http://scikit-image.org/docs/dev/_images/plot_gabors_from_lena.png', 'http://scikit-image.org/docs/dev/_images/plot_glcm.png', 'http://scikit-image.org/docs/dev/_images/plot_hog.png', 'http://scikit-image.org/docs/dev/_images/plot_holes_and_peaks.png', 'http://scikit-image.org/docs/dev/_images/plot_hough_transform.png', 'http://scikit-image.org/docs/dev/_images/plot_join_segmentations.png', 'http://scikit-image.org/docs/dev/_images/plot_label.png', 'http://scikit-image.org/docs/dev/_images/plot_local_binary_pattern.png', 'http://scikit-image.org/docs/dev/_images/plot_local_equalize.png', 'http://scikit-image.org/docs/dev/_images/plot_local_otsu.png', 'http://scikit-image.org/docs/dev/_images/plot_marked_watershed.png', 'http://scikit-image.org/docs/dev/_images/plot_medial_transform.png', 'http://scikit-image.org/docs/dev/_images/plot_otsu.png', 'http://scikit-image.org/docs/dev/_images/plot_peak_local_max.png', 'http://scikit-image.org/docs/dev/_images/plot_piecewise_affine.png', 'http://scikit-image.org/docs/dev/_images/plot_polygon.png', 'http://scikit-image.org/docs/dev/_images/plot_pyramid.png', 'http://scikit-image.org/docs/dev/_images/plot_radon_transform.png', 'http://scikit-image.org/docs/dev/_images/plot_random_walker_segmentation.png', 'http://scikit-image.org/docs/dev/_images/plot_regional_maxima.png', 'http://scikit-image.org/docs/dev/_images/plot_regionprops.png', 'http://scikit-image.org/docs/dev/_images/plot_segmentations.png', 'http://scikit-image.org/docs/dev/_images/plot_shapes.png', 'http://scikit-image.org/docs/dev/_images/plot_skeleton.png', 'http://scikit-image.org/docs/dev/_images/plot_ssim.png', 'http://scikit-image.org/docs/dev/_images/plot_swirl.png', 'http://scikit-image.org/docs/dev/_images/plot_template.png', 'http://scikit-image.org/docs/dev/_images/plot_threshold_adaptive.png', 'http://scikit-image.org/docs/dev/_images/plot_view_as_blocks.png', 'http://scikit-image.org/docs/dev/_images/plot_watershed.png'];
       var links = ['http://scikit-image.org/docs/dev/auto_examples/plot_16bitbilateral.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_canny.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_circular_hough_transform.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_contours.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_convex_hull.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_corner.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_daisy.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_denoise.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_entropy.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_equalize.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_gabors_from_lena.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_glcm.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_hog.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_holes_and_peaks.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_hough_transform.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_join_segmentations.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_label.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_local_binary_pattern.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_local_equalize.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_local_otsu.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_marked_watershed.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_medial_transform.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_otsu.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_peak_local_max.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_piecewise_affine.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_polygon.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_pyramid.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_radon_transform.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_random_walker_segmentation.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_regional_maxima.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_regionprops.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_segmentations.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_shapes.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_skeleton.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_ssim.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_swirl.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_template.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_threshold_adaptive.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_view_as_blocks.html', 'http://scikit-image.org/docs/dev/auto_examples/plot_watershed.html'];

       ix = Math.floor(Math.random() * images.length);
       document.write(
'<div class="gallery_image">      <a href="URL"><img src="IMG"/></a></div>'.replace('IMG', images[ix]).replace('URL', links[ix])
       );

       console.log('<div class="gallery_image">      <a href="URL"><img src="IMG"/></a></div>'.replace('IMG', images[ix]).replace('URL', links[ix]));
   };

