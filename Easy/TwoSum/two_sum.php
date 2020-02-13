<?php
function twoSum($nums, $target) {
    $results = array();
    for ( $index = 0; $index < count( $nums ) ; $index++ ) {
        $current_number = $nums[$index];
          if ( isset( $results[$current_number]  ) ) {
            return [ $results[$current_number] , $index ];

        }
        $results[ $target - $current_number ] = $index;
    }
}

/* get the other number by searching ( $target - $current_number ) in $nums array
check if $next_number_id === 0 and $next_number_id !== $index */

function twoSum2($nums, $target) {
    for ($index = 0; $index < count( $nums) ; $index++) {
        $current_number = $nums[$index];
        $next_number_id = array_search( $target - $current_number, $nums );

        if ( $next_number_id !== $index ) {
            if ( $next_number_id || $next_number_id === 0 ) {
                return [$index,  $next_number_id];
            }
        }
    }
}
$nums = [3,3];
$target = 6;

print_r( twoSum( $nums, $target ) );

?>