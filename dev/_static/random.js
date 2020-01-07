
   function insert_gallery() {
       var images = ['https://scikit-image.org/docs/dev/_images/sphx_glr_plot_cycle_spinning_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_deconvolution_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_unsharp_mask_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_denoise_wavelet_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_denoise_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_inpaint_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rank_mean_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_entropy_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_hysteresis_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_restoration_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_nonlocal_means_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_phase_unwrap_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_attribute_operators_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_max_tree_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_threshold_li_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_face_detection_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_coins_segmentation_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_thresholding_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rank_filters_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_image_comparison_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_haar_extraction_selection_classification_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_morphology_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_geometric_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_skeleton_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_line_hough_transform_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_shapes_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_circular_elliptical_hough_transform_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_convex_hull_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_ridge_filter_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_marching_cubes_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_polygon_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_canny_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_random_shapes_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_contours_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_active_contours_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_edge_filter_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_peak_local_max_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rag_merge_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_segmentations_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_compact_watershed_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_thresholding_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_metrics_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_boundary_merge_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_marked_watershed_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_ncut_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_random_walker_segmentation_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_chan_vese_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rag_mean_color_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_morphsnakes_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rag_draw_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_label_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_regionprops_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rag_boundary_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_multiotsu_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rag_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_join_segmentations_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_extrema_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_watershed_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_floodfill_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_niblack_sauvola_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_regionprops_table_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_ssim_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_swirl_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_matching_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_register_translation_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_ransac_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_edge_modes_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_pyramid_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_radon_transform_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_masked_register_translation_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_piecewise_affine_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_fundamental_matrix_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_register_rotation_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rescale_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_glcm_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_corner_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_gabor_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_template_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_haar_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_brief_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_orb_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_censure_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_shape_index_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_windowed_histogram_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_holes_and_peaks_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_gabors_from_astronaut_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_hog_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_local_binary_pattern_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_multiblock_local_binary_pattern_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_blob_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_daisy_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_specific_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_scientific_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_general_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_ihc_color_separation_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_local_equalize_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_log_gamma_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_equalize_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rgb_to_gray_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_rgb_to_hsv_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_adapt_rgb_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_histogram_matching_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_tinting_grayscale_images_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_regional_maxima_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_view_as_blocks_001.png', 'https://scikit-image.org/docs/dev/_images/sphx_glr_plot_camera_numpy_001.png'];
       var links = ['https://scikit-image.org/docs/dev/auto_examples/filters/plot_cycle_spinning.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_deconvolution.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_unsharp_mask.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_denoise_wavelet.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_denoise.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_inpaint.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_rank_mean.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_entropy.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_hysteresis.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_restoration.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_nonlocal_means.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_phase_unwrap.html', 'https://scikit-image.org/docs/dev/auto_examples/filters/plot_attribute_operators.html', 'https://scikit-image.org/docs/dev/auto_examples/developers/plot_max_tree.html', 'https://scikit-image.org/docs/dev/auto_examples/developers/plot_threshold_li.html', 'https://scikit-image.org/docs/dev/auto_examples/applications/plot_face_detection.html', 'https://scikit-image.org/docs/dev/auto_examples/applications/plot_coins_segmentation.html', 'https://scikit-image.org/docs/dev/auto_examples/applications/plot_thresholding.html', 'https://scikit-image.org/docs/dev/auto_examples/applications/plot_rank_filters.html', 'https://scikit-image.org/docs/dev/auto_examples/applications/plot_image_comparison.html', 'https://scikit-image.org/docs/dev/auto_examples/applications/plot_haar_extraction_selection_classification.html', 'https://scikit-image.org/docs/dev/auto_examples/applications/plot_morphology.html', 'https://scikit-image.org/docs/dev/auto_examples/applications/plot_geometric.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_skeleton.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_line_hough_transform.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_shapes.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_circular_elliptical_hough_transform.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_convex_hull.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_ridge_filter.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_marching_cubes.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_polygon.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_canny.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_random_shapes.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_contours.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_active_contours.html', 'https://scikit-image.org/docs/dev/auto_examples/edges/plot_edge_filter.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_peak_local_max.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_rag_merge.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_segmentations.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_compact_watershed.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_thresholding.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_metrics.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_boundary_merge.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_marked_watershed.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_ncut.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_random_walker_segmentation.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_chan_vese.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_rag_mean_color.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_morphsnakes.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_rag_draw.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_label.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_regionprops.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_rag_boundary.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_multiotsu.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_rag.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_join_segmentations.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_extrema.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_watershed.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_floodfill.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_niblack_sauvola.html', 'https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_regionprops_table.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_ssim.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_swirl.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_matching.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_register_translation.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_ransac.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_edge_modes.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_pyramid.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_radon_transform.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_masked_register_translation.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_piecewise_affine.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_fundamental_matrix.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_register_rotation.html', 'https://scikit-image.org/docs/dev/auto_examples/transform/plot_rescale.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_glcm.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_corner.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_gabor.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_template.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_haar.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_brief.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_orb.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_censure.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_shape_index.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_windowed_histogram.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_holes_and_peaks.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_gabors_from_astronaut.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_hog.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_local_binary_pattern.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_multiblock_local_binary_pattern.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_blob.html', 'https://scikit-image.org/docs/dev/auto_examples/features_detection/plot_daisy.html', 'https://scikit-image.org/docs/dev/auto_examples/data/plot_specific.html', 'https://scikit-image.org/docs/dev/auto_examples/data/plot_scientific.html', 'https://scikit-image.org/docs/dev/auto_examples/data/plot_general.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_ihc_color_separation.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_local_equalize.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_log_gamma.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_equalize.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_rgb_to_gray.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_rgb_to_hsv.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_adapt_rgb.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_histogram_matching.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_tinting_grayscale_images.html', 'https://scikit-image.org/docs/dev/auto_examples/color_exposure/plot_regional_maxima.html', 'https://scikit-image.org/docs/dev/auto_examples/numpy_operations/plot_view_as_blocks.html', 'https://scikit-image.org/docs/dev/auto_examples/numpy_operations/plot_camera_numpy.html'];

       ix = Math.floor(Math.random() * images.length);
       document.write(
'<div class="gallery_image">      <a href="URL"><img src="IMG"/></a></div>'.replace('IMG', images[ix]).replace('URL', links[ix])
       );

       console.log('<div class="gallery_image">      <a href="URL"><img src="IMG"/></a></div>'.replace('IMG', images[ix]).replace('URL', links[ix]));
   };

