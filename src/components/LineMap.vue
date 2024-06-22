<script setup lang="ts">
	import TrainLine from './TrainLine.vue' 
</script>
<template>
	<TrainLine name="丸ノ内線" :deg="0" :length="20" :x="55" :y="20"/>
	<TrainLine name="丸ノ内線" :deg="45" :length="30" :x="70" :y="30"/>
	<TrainLine name="丸ノ内線" :deg="0" :length="35" :x="95" :y="41"/>
	<TrainLine name="丸ノ内線" :deg="90" :length="60" :x="100" :y="70"/>
	<TrainLine name="丸ノ内線" :deg="0" :length="55" :x="75" :y="100"/>
	<TrainLine name="丸ノ内線" :deg="45" :length="40" :x="43" :y="86"/>
	<TrainLine name="丸ノ内線" :deg="0" :length="35" :x="15" :y="73"/>
	
	<TrainLine name="有楽町線" :deg="0" :length="35" :x="38" :y="33"/>
	<TrainLine name="有楽町線" :deg="45" :length="17" :x="69" :y="38"/>
	<TrainLine name="有楽町線" :deg="90" :length="40" :x="63" :y="62"/>
	<TrainLine name="有楽町線" :deg="45" :length="15" :x="81" :y="87"/>
	<TrainLine name="有楽町線" :deg="0" :length="45" :x="92" :y="92"/>
	<TrainLine name="有楽町線" :deg="45" :length="45" :x="129" :y="108"/>
	<TrainLine name="有楽町線" :deg="0" :length="15" :x="166" :y="124"/>

	<TrainLine name="東西線" :deg="-45" :length="25" :x="37" :y="60"/>
	<TrainLine name="東西線" :deg="0" :length="30" :x="57" :y="52"/>		
	<TrainLine name="東西線" :deg="45" :length="40" :x="81" :y="66"/>
	<TrainLine name="東西線" :deg="0" :length="30" :x="114" :y="80"/>
	<TrainLine name="東西線" :deg="45" :length="40" :x="137" :y="94"/>
	<TrainLine name="東西線" :deg="0" :length="15" :x="169" :y="108"/>

	<TrainLine name="副都心線" :deg="0" :length="35" :x="40" :y="36"/>
	<TrainLine name="副都心線" :deg="90" :length="35" :x="57" :y="53"/>
	<TrainLine name="副都心線" :deg="-45" :length="10" :x="66" :y="73"/>
	<TrainLine name="副都心線" :deg="90" :length="40" :x="49" :y="96"/>
	<TrainLine name="副都心線" :deg="-45" :length="15" :x="56" :y="120"/>
	<TrainLine name="副都心線" :deg="90" :length="15" :x="52" :y="130"/>

	<TrainLine name="半蔵門線" :deg="0" :length="20" :x="57" :y="137"/>
	<TrainLine name="半蔵門線" :deg="-45" :length="30" :x="71" :y="126"/>
	<TrainLine name="半蔵門線" :deg="90" :length="40" :x="77" :y="97"/>
	<TrainLine name="半蔵門線" :deg="-45" :length="13" :x="94" :y="73"/>
	<TrainLine name="半蔵門線" :deg="0" :length="11" :x="105" :y="69"/>
	<TrainLine name="半蔵門線" :deg="90" :length="10" :x="110" :y="73"/>
	<TrainLine name="半蔵門線" :deg="0" :length="40" :x="115" :y="77"/>
	<TrainLine name="半蔵門線" :deg="45" :length="22" :x="151" :y="85"/>
	<TrainLine name="半蔵門線" :deg="0" :length="15" :x="169" :y="92"/>

	<TrainLine name="銀座線" :deg="0" :length="25" :x="57" :y="140"/>
	<TrainLine name="銀座線" :deg="-45" :length="25" :x="78" :y="131"/>
	<TrainLine name="銀座線" :deg="90" :length="20" :x="90" :y="114"/>
	<TrainLine name="銀座線" :deg="0" :length="40" :x="99" :y="105"/>
	<TrainLine name="銀座線" :deg="-45" :length="27" :x="134" :y="95"/>
	<TrainLine name="銀座線" :deg="45" :length="27" :x="135" :y="77"/>
	<TrainLine name="銀座線" :deg="90" :length="35" :x="122" :y="51"/>
	<TrainLine name="銀座線" :deg="0" :length="20" :x="138" :y="33"/>

	<TrainLine name="千代田線" :deg="45" :length="40" :x="50" :y="130"/>
	<TrainLine name="千代田線" :deg="-45" :length="30" :x="78" :y="134"/>
	<TrainLine name="千代田線" :deg="90" :length="23" :x="93" :y="114"/>
	<TrainLine name="千代田線" :deg="0" :length="22" :x="103" :y="103"/>
	<TrainLine name="千代田線" :deg="90" :length="80" :x="85" :y="64"/>
	<TrainLine name="千代田線" :deg="0" :length="26" :x="123" :y="24"/>

	<TrainLine name="南北線" :deg="90" :length="55" :x="70" :y="30"/>
	<TrainLine name="南北線" :deg="0" :length="20" :x="78" :y="57"/>
	<TrainLine name="南北線" :deg="90" :length="30" :x="65" :y="71"/>
	<TrainLine name="南北線" :deg="45" :length="15" :x="77" :y="90"/>
	<TrainLine name="南北線" :deg="0" :length="25" :x="89" :y="96"/>
	<TrainLine name="南北線" :deg="90" :length="30" :x="98" :y="110"/>
	<TrainLine name="南北線" :deg="-45" :length="40" :x="79" :y="138"/>
	<TrainLine name="南北線" :deg="0" :length="32" :x="55" :y="152"/>

	<TrainLine name="日比谷線" :deg="0" :length="30" :x="55" :y="148"/>
	<TrainLine name="日比谷線" :deg="-45" :length="35" :x="78" :y="137"/>
	<TrainLine name="日比谷線" :deg="90" :length="10" :x="103" :y="120"/>
	<TrainLine name="日比谷線" :deg="0" :length="12" :x="108" :y="116"/>
	<TrainLine name="日比谷線" :deg="90" :length="20" :x="110" :y="107"/>
	<TrainLine name="日比谷線" :deg="0" :length="15" :x="119" :y="97"/>
	<TrainLine name="日比谷線" :deg="0" :length="15" :x="119" :y="97"/>
	<TrainLine name="日比谷線" :deg="45" :length="25" :x="129" :y="105"/>
	<TrainLine name="日比谷線" :deg="-45" :length="35" :x="144" :y="100"/>
	<TrainLine name="日比谷線" :deg="45" :length="40" :x="140" :y="75"/>
	<TrainLine name="日比谷線" :deg="90" :length="40" :x="126" :y="42"/>


</template>
