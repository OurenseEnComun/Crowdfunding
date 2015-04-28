<?php global $post; ?>
<?php get_header(); ?>
<div id="container">
	<div id="site-description">
		<h1><?php echo apply_filters('project_archive_title', __('Support us!', 'fivehundred')); ?></h1>
<p>A túa axuda é imprescindible para que o noso proxecto en COMÚN para Ourense se poida construír sen lle deber nada a ningunha entidade financeira.</p>
<p>Podes facer dous tipos de achegas para axudar a Ourense en Común a asumir os gastos de campaña, que en calquera caso serán modestos.</p>
	</div>
	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div id="content">
			<div id="project-grid">
				<?php 
				if (is_archive('ignition_product')) {
					get_template_part('loop', 'project');
				}
				else {
					$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
					$posts_per_page = get_option('posts_per_page');
					$query = new WP_Query(
						array(
							'paged' => $paged,
							'posts_per_page' => (!empty($posts_per_page) ? $posts_per_page : 9)
						)
					);
					// Start the loop
					if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post();
						get_template_part('entry');
						endwhile;
						endif; 
					wp_reset_postdata();
				}
				?>
			</div>
			<div style="clear: both;"></div>
		</div>
	</div>
	<div class="clear"></div>
</div>
<?php get_footer(); ?>
