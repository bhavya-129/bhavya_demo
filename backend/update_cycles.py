import sqlite3

conn = sqlite3.connect('db.sqlite3')
cur = conn.cursor()

# 1. Delete ratings for appraisal 2c82226df8e749a3905a39e115308304
cur.execute("DELETE FROM performance_appraisalrating WHERE appraisal_id = '2c82226df8e749a3905a39e115308304'")

# 2. Delete appraisal 2c82226df8e749a3905a39e115308304
cur.execute("DELETE FROM performance_appraisal WHERE id = '2c82226df8e749a3905a39e115308304'")

# 3. Delete closed cycle 6b785efb4ab44ca1980516125d0d32f7
cur.execute("DELETE FROM performance_performancecycle WHERE id = '6b785efb4ab44ca1980516125d0d32f7'")

# 4. Update the active cycle to 'MIRAI Cohort 1' with dates Sep 26 to Dec 26
cur.execute("""
    UPDATE performance_performancecycle
    SET name = 'MIRAI Cohort 1',
        description = 'MIRAI Cohort 1 (Sep 26 to Dec 26)',
        start_date = '2026-09-26',
        end_date = '2026-12-26',
        status = 'ACTIVE'
    WHERE id = 'b78df29ae7f249b29437de17a0660e65'
""")

conn.commit()

cur.execute("SELECT id, name, start_date, end_date, status FROM performance_performancecycle")
print("Remaining cycles in DB:", cur.fetchall())
conn.close()
