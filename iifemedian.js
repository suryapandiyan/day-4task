(function findMedianSortedArrays(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    if (length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  })(num1=[1,3,4],num2=[2,3,4]);
  