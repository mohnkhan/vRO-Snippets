var vCenters = VcPlugin.allSdkConnections;  
for each (vCenter in vCenters){  
    var clusters = vCenter.allClusterComputeResources;
	for each (cluster in clusters){
		System.log(cluster.name + ": " + cluster.summary.effectiveMemory);
		System.log(cluster.name + ": " + cluster.summary.usageSummary.memDemandMB);
		for each(singlehost in cluster.host){
			System.log(singlehost.name + ": " + singlehost.runtime.connectionState);
			System.log(singlehost.name + ": " + singlehost.runtime.memoryCapacityForVm);
		}
	}
} 



