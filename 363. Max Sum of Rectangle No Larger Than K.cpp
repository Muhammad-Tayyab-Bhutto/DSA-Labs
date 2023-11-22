class Solution {
public:
  int maxSumSubmatrix(vector<vector<int>>& matrix, int k) {
    int result = std::numeric_limits<int>::min();
    int rows = matrix.size();
    if (rows == 0) return result;
    int cols = matrix[0].size();
    if (cols == 0) return result;
    for (int i = 0; i < cols; ++i) {
      vector<long long> sum(rows, 0);
      for (int j = i; j < cols; ++j) {
        for (int l = 0; l < rows; ++l) {
          sum[l] += matrix[l][j];
        }
  
        int current = 0;
        int current_max = std::numeric_limits<int>::min();
        set<int> values;
        values.insert(0);
        for (auto item: sum) {
          current += item;
          auto it = values.lower_bound(current - k);
          if (it != values.end()) current_max = max(current_max, current - *it);
          values.insert(current);
        }
        result = max(result, current_max);
      }
    }
    return result;
  }
};