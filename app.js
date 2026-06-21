const STORAGE_KEY = "wisebalance.v1.data";
const LEGACY_STORAGE_KEY = "warikan.v1.data";
const SELECTED_EVENT_KEY = "wisebalance.selectedEventId";
const LEGACY_SELECTED_EVENT_KEY = "warikan.selectedEventId";
const DEFAULT_CATEGORY_NAMES = ["Food", "Transport", "Stay", "Tickets", "Shopping", "Others"];

const translations = {
  en: {
    dashboard_page_title: "Wise Balance - Split Smart",
    dashboard_title: "Wise Balance",
    dashboard_p: "Fast expense setup for trips and events",
    go_home: "Go to Home",
    events_nav: "Events",
    no_event_selected: 'No event selected. Open <a class="inline-link" href="events.html">Events page</a> and choose one.',
    event_subtitle: "Track expenses and live balances in one place.",
    view_as: "View as",
    all_members: "All members",
    collector: "Collector",
    no_collector_set: "No collector set",
    event_overview: "Event Overview",
    members_sub: "Members",
    no_members_yet: "No members yet",
    members_opt: "Add Members",
    members_opt_p: "Keep this collapsed for a cleaner dashboard. Open only when you need to edit members.",
    manage_members: "Manage Members",
    member_name_placeholder: "Member name",
    add: "Add",
    categories_opt: "Categories (optional)",
    categories_opt_p: "Keep this collapsed for a cleaner dashboard. Open only when you need to edit categories.",
    manage_categories: "Manage Categories",
    use_defaults: "Use Defaults",
    category_name_placeholder: "Category name",
    no_categories_yet: "No categories yet",
    add_expense: "Add Expense",
    add_expense_p: "Enter the total once, then assign shares to members. Remaining must be 0.",
    amount_jpy: "Amount (JPY)",
    paid_by: "Paid by",
    category: "Category",
    note: "Note",
    note_placeholder: "Dinner, Taxi, Hotel",
    assign_to_members: "Assign Amount to Members",
    select_all: "Select All",
    deselect_all: "Deselect All",
    split_equal: "Split Equal",
    amount_label: "Amount:",
    assigned_label: "Assigned:",
    remaining_label: "Remaining:",
    save_expense: "Save Expense",
    cancel_edit: "Cancel Edit",
    expenses_title: "Expenses",
    expense_snapshot: "Expense Snapshot",
    expense_snapshot_p: "Category, payer, and trend analytics for this event.",
    daily_trend: "Daily Trend (Recent)",
    insights: "Insights",
    balances_and_dues: "Balances and Dues",
    balances_and_dues_p: "See who needs to pay and who receives. Installments reduce remaining dues instantly.",
    breakdown_title: "Per user breakdown",
    user_th: "User",
    topay_th: "To Pay",
    toreceive_th: "To Receive",
    who_pays_title: "Who pays whom?",
    from_th: "From",
    to_th: "To",
    total_th: "Total",
    paid_th: "Paid",
    remaining_th: "Remaining",
    installment_th: "Installment",
    history_title: "Transaction History",
    history_p: "All expenses and installment payments with date/time.",
    date_th: "Date",
    type_th: "Type",
    category_th: "Category",
    note_th: "Note",
    amount_th: "Amount",

    // Dynamic strings in app.js
    total_expense_tag: "Total Expense:",
    uncategorized: "Uncategorized",
    no_notes: "No note",
    edit: "Edit",
    delete: "Delete",
    no_expenses_yet: "No expenses yet",
    highest_category: "Highest Category",
    category_count: "Category Count",
    expense_count: "Expense Count",
    average_expense: "Average Expense",
    median_expense: "Median Expense",
    chart_empty: "No expense data yet. Add expenses to generate analytics.",
    comparative_insights_note: "Single category dataset: add more categories for comparative insights.",
    no_trend_data: "No date trend available.",
    per_member: "members",
    all_settled: "All settled",
    settled_status: "Settled",
    pay_btn: "Pay",
    no_dues_yet: "No dues yet",
    expense_type: "Expense",
    payment_type: "Payment",
    installment_payment: "Installment payment",
    no_transactions_yet: "No transactions yet",
    all_members_option: "All members",
    no_collector_option: "No collector set",
    removed_category: "Removed category",
    removed_member: "Removed",
    unknown: "Unknown",
    who_paid_prefix: "Paid by",
    shared_members_label: "Shared members",

    // Prompt, confirms, and alerts
    prompt_edit_member: "Edit member name:",
    alert_member_empty: "Member name cannot be empty.",
    prompt_edit_category: "Edit category name:",
    alert_category_empty: "Category name cannot be empty.",
    alert_category_duplicate: "That category already exists.",
    confirm_delete_member: "Delete this member? This will clear all their related payments and expenses.",
    confirm_delete_category: "Delete this category?",
    alert_category_added: "Added {count} default categories.",
    alert_category_already_exists: "All default categories are already in this event.",
    alert_enter_amount_first: "Enter a valid amount first.",
    alert_select_member_first: "Select at least one member.",
    alert_edit_cancelled: "Edit cancelled.",
    alert_amount_positive: "Amount must be a positive whole number.",
    alert_pick_payer: "Pick who paid this expense.",
    alert_select_assignee: "Select at least one member to assign amount.",
    alert_assigned_whole: "Assigned amounts must be whole numbers (JPY).",
    alert_assigned_match: "Assigned total {total} must match expense amount {amount}.",
    alert_expense_not_found: "Could not find the expense to update.",
    alert_expense_updated: "Expense updated.",
    alert_expense_saved: "Expense saved.",
    alert_installment_positive: "Installment must be a positive whole number.",
    alert_installment_exceed: "Installment cannot exceed remaining {amount}.",
    alert_payment_recorded: "Payment recorded: {amount}.",
    events_create_choose: "Manage Events",
    events_dashboard_p: "Create a new event or select an existing one to view its dashboard.",
    new_event_placeholder: "New event name",
    prompt_edit_event_name: "Edit event name:",
    alert_event_name_empty: "Event name cannot be empty.",
    confirm_delete_event: "Delete this event and all related data?",
    cancel: "Cancel",
    save: "Save",
    edit_member_title: "Edit Member Name",
    delete_member_title: "Delete Member",
    edit_category_title: "Edit Category Name",
    delete_category_title: "Delete Category",
    delete_expense_title: "Delete Expense",
    confirm_delete_expense: "Are you sure you want to delete this expense?",

    // Insights templates
    insight_top_category: "Top category {category} contributes {share}% of total spend.",
    insight_top_payer: "Top payer {payer} covered {share}% ({amount}).",
    insight_concentration: "Spend concentration is {concentration} (HHI {hhi}).",
    insight_recent_activity: "Recent activity covers {days} day(s) with {amount} in volume.",
    concentration_high: "High",
    concentration_medium: "Medium",
    concentration_low: "Low"
  },
  ja: {
    dashboard_page_title: "Wise Balance - スマート割り勘",
    dashboard_title: "Wise Balance",
    dashboard_p: "旅行やイベントのための迅速な経費管理",
    go_home: "ホームへ",
    events_nav: "イベント一覧",
    no_event_selected: 'イベントが選択されていません。<a class="inline-link" href="events.html">イベント一覧ページ</a>を開いて選択してください。',
    event_subtitle: "経費とリアルタイムの残高を1箇所で管理。",
    view_as: "表示メンバー",
    all_members: "すべてのメンバー",
    collector: "集金役",
    no_collector_set: "集金役が設定されていません",
    event_overview: "イベント概要",
    members_sub: "メンバー",
    no_members_yet: "まだメンバーがいません",
    members_opt: "メンバー追加",
    members_opt_p: "ダッシュボードをスッキリ保つため、ここは折りたたんでおくことができます。メンバーを編集するときだけ開いてください。",
    manage_members: "メンバー管理",
    member_name_placeholder: "メンバー名を入力",
    add: "追加",
    categories_opt: "カテゴリ追加 (任意)",
    categories_opt_p: "ダッシュボードをスッキリ保つため、ここは折りたたんでおくことができます。カテゴリを追加・編集するときだけ開いてください。",
    manage_categories: "カテゴリ管理",
    use_defaults: "デフォルト値を使用",
    category_name_placeholder: "カテゴリ名を入力",
    no_categories_yet: "カテゴリがありません",
    add_expense: "経費の追加",
    add_expense_p: "はじめに総額を入力し、そのあとで各メンバーに割り当ててください。「残り」が ¥0 になる必要があります。",
    amount_jpy: "金額 (円)",
    paid_by: "支払者",
    category: "カテゴリ",
    note: "メモ",
    note_placeholder: "夕食、交通費、ホテルなど",
    assign_to_members: "メンバーごとの割り当て額",
    select_all: "すべて選択",
    deselect_all: "すべて解除",
    split_equal: "等分割り勘",
    amount_label: "総額:",
    assigned_label: "割り当て済み:",
    remaining_label: "残り金額:",
    save_expense: "経費を保存",
    cancel_edit: "編集をキャンセル",
    expenses_title: "経費一覧",
    expense_snapshot: "支出インサイト",
    expense_snapshot_p: "カテゴリ・支払者・トレンドのビジュアル分析。",
    daily_trend: "日次トレンド (直近)",
    insights: "傾向インサイト",
    balances_and_dues: "残高と精算フロー",
    balances_and_dues_p: "誰が支払い、誰が受け取るかを表示。部分送金/精算を行うと、連動して残高が即時減額されます。",
    breakdown_title: "ユーザーごとの収支残高",
    user_th: "ユーザー",
    topay_th: "支払うべき額",
    toreceive_th: "受取るべき額",
    who_pays_title: "送金ルート（誰から誰へ？）",
    from_th: "支払元",
    to_th: "支払先",
    total_th: "総額",
    paid_th: "送金済",
    remaining_th: "残り",
    installment_th: "部分精算",
    history_title: "取引履歴",
    history_p: "すべての経費支出と部分精算の履歴（日時順）。",
    date_th: "日時",
    type_th: "取引種別",
    category_th: "カテゴリ",
    note_th: "メモ",
    amount_th: "金額",

    // Dynamic strings in app.js
    total_expense_tag: "合計費用:",
    uncategorized: "カテゴリ未設定",
    no_notes: "メモなし",
    edit: "編集",
    delete: "削除",
    no_expenses_yet: "まだ経費が登録されていません",
    highest_category: "最高割合カテゴリ",
    category_count: "カテゴリ数",
    expense_count: "件数",
    average_expense: "平均支出額",
    median_expense: "中央値",
    chart_empty: "経費データがありません。経費を登録するとビジュアル分析が生成されます。",
    comparative_insights_note: "カテゴリが1つのみです。複数のカテゴリを登録すると比較インサイトを表示できます。",
    no_trend_data: "利用可能なトレンドデータはありません。",
    per_member: "人のメンバー",
    all_settled: "すべて清算済み",
    settled_status: "清算完了",
    pay_btn: "送金",
    no_dues_yet: "貸し借りは現在ありません",
    expense_type: "経費",
    payment_type: "精算送金",
    installment_payment: "部分精算の送金",
    no_transactions_yet: "取引履歴はまだありません",
    all_members_option: "すべてのメンバー",
    no_collector_option: "集集役なし",
    removed_category: "削除されたカテゴリ",
    removed_member: "削除済み",
    unknown: "不明",
    who_paid_prefix: "支払者:",
    shared_members_label: "割り勘メンバー",

    // Prompt, confirms, and alerts
    prompt_edit_member: "メンバー名を変更します:",
    alert_member_empty: "メンバー名は空にできません。",
    prompt_edit_category: "カテゴリ名を変更します:",
    alert_category_empty: "カテゴリ名は空にできません。",
    alert_category_duplicate: "そのカテゴリはすでに存在します。",
    confirm_delete_member: "このメンバーを削除しますか？これまでの登録データ・支払い履歴がすべてクリアされます。",
    confirm_delete_category: "このカテゴリを削除しますか？",
    alert_category_added: "デフォルトカテゴリを {count} 個追加しました。",
    alert_category_already_exists: "すべてのデフォルトカテゴリがすでにこのイベントに登録されています。",
    alert_enter_amount_first: "はじめに有効な金額を入力してください。",
    alert_select_member_first: "メンバーを最低1人選択してください。",
    alert_edit_cancelled: "編集をキャンセルしました。",
    alert_amount_positive: "金額は正の整数で入力してください。",
    alert_pick_payer: "支払者を選択してください。",
    alert_select_assignee: "金額を割り当てるメンバーを最低1人選択してください。",
    alert_assigned_whole: "割り当て金額は整数の「円」で入力してください。",
    alert_assigned_match: "割り当て合計額（{total}）は、入力された経費総額（{amount}）と一致する必要があります。",
    alert_expense_not_found: "更新する経費が見つかりませんでした。",
    alert_expense_updated: "経費を更新しました。",
    alert_expense_saved: "経費を保存しました。",
    alert_installment_positive: "送金する金額は正の整数を指定してください。",
    alert_installment_exceed: "送金額は残り金額の {amount} を超えることはできません。",
    alert_payment_recorded: "送金支払いを記録しました: {amount}。",
    events_create_choose: "イベント管理",
    events_dashboard_p: "新しくイベントを作成するか、既存のイベントを選択してダッシュボードを開きます。",
    new_event_placeholder: "新しいイベント名",
    prompt_edit_event_name: "イベント名を編集してください：",
    alert_event_name_empty: "イベント名は空にできません。",
    confirm_delete_event: "このイベントと、関連するすべてのデータを削除しますか？",
    cancel: "キャンセル",
    save: "保存",
    edit_member_title: "メンバー名の変更",
    delete_member_title: "メンバーの削除",
    edit_category_title: "カテゴリ名の変更",
    delete_category_title: "カテゴリの削除",
    delete_expense_title: "経費の削除",
    confirm_delete_expense: "この経費を削除してもよろしいですか？",

    // Insights templates
    insight_top_category: "最高支出の「{category}」が、イベント総支出の {share}% を占めています。",
    insight_top_payer: "主要支払者の「{payer}」が、全体の {share}% ({amount}) を立て替え払いしています。",
    insight_concentration: "支出の集中度は「{concentration}」です（HHI係数 {hhi}）。",
    insight_recent_activity: "直近の取引は {days} 日間にわたり、支払総額は {amount} にのぼります。",
    concentration_high: "高い",
    concentration_medium: "普通",
    concentration_low: "低い"
  },
  bn: {
    dashboard_page_title: "Wise Balance - বুদ্ধিমান ভাগাভাগি",
    dashboard_title: "Wise Balance",
    dashboard_p: "ভ্রমণ এবং ইভেন্টের দ্রুত খরচের হিসাব",
    go_home: "হোমে যান",
    events_nav: "ইভেন্টসমূহ",
    no_event_selected: 'কোনো ইভেন্ট নির্বাচন করা হয়নি। <a class="inline-link" href="events.html">ইভেন্ট তালিকা পৃষ্ঠা</a> খুলুন এবং একটি নির্বাচন করুন।',
    event_subtitle: "এক জায়গায় খরচ এবং লাইভ ব্যালেন্স ট্র্যাক করুন।",
    view_as: "হিসাবে দেখুন",
    all_members: "সকল সদস্য",
    collector: "সংগ্রাহক",
    no_collector_set: "কোনো সংগ্রাহক নির্বাচিত নেই",
    event_overview: "ইভেন্ট ওভারভিউ",
    members_sub: "সদস্যবৃন্দ",
    no_members_yet: "এখনো কোনো সদস্য নেই",
    members_opt: "সদস্য যোগ করুন",
    members_opt_p: "ক্লিন ড্যাশবোর্ডের জন্য এটি বন্ধ রাখতে পারেন। শুধু সদস্য পরিবর্তন করতে চাইলে এটি খুলুন।",
    manage_members: "সদস্য পরিচালনা করুন",
    member_name_placeholder: "সদস্যের নাম",
    add: "যোগ করুন",
    categories_opt: "ক্যাটাগরি (ঐচ্ছিক)",
    categories_opt_p: "ক্লিন ড্যাশবোর্ডের জন্য এটি বন্ধ রাখতে পারেন। শুধু ক্যাটাগরি পরিবর্তন করতে চাইলে এটি খুলুন।",
    manage_categories: "ক্যাটাগরি পরিচালনা করুন",
    use_defaults: "ডিফল্ট ব্যবহার করুন",
    category_name_placeholder: "ক্যাটাগরির নাম",
    no_categories_yet: "এখনো কোনো ক্যাটাগরি নেই",
    add_expense: "খরচ যোগ করুন",
    add_expense_p: "প্রথমে মোট পরিমাণ দিন, তারপর সদস্যদের ভাগ নির্ধারণ করুন। অবশিষ্ট অবশ্যই ০ হতে হবে।",
    amount_jpy: "পরিমাণ (JPY)",
    paid_by: "পরিশোধ করেছেন",
    category: "ক্যাটাগরি",
    note: "নোট",
    note_placeholder: "ডিনার, ট্যাক্সি, হোটেল ইত্যাদি",
    assign_to_members: "সদস্যদের মাঝে ভাগ করে দিন",
    select_all: "সব সিলেক্ট করুন",
    deselect_all: "সব সিলেকশন মুছুন",
    split_equal: "সমান ভাগে ভাগ করুন",
    amount_label: "মোট পরিমাণ:",
    assigned_label: "বরাদ্দকৃত:",
    remaining_label: "অবशिष्ट:",
    save_expense: "খরচ সংরক্ষণ করুন",
    cancel_edit: "সম্পাদনা বাতিল",
    expenses_title: "খরচসমূহ",
    expense_snapshot: "খরচের বিশ্লেষণ",
    expense_snapshot_p: "শ্রেণী, দাতা এবং ট্রেন্ড সম্পর্কিত ভিজ্যুয়াল তথ্য।",
    daily_trend: "দৈনিক ট্রেন্ড (সাম্প্রতিক)",
    insights: "ইনসাইটস",
    balances_and_dues: "ব্যালেন্স এবং দেনা-পাওনা",
    balances_and_dues_p: "কে দেবে এবং কে পাবে তা দেখুন। কিস্তি পরিশোধ করলে দেনা সাথে সাথে কমে যায়।",
    breakdown_title: "সদস্যভিত্তিক হিসাব",
    user_th: "সদস্য",
    topay_th: "দিতে হবে",
    toreceive_th: "পাবে",
    who_pays_title: "কে কাকে দেবে?",
    from_th: "দাতা",
    to_th: "গ্রহীতা",
    total_th: "মোট",
    paid_th: "পরিশোধিত",
    remaining_th: "অবशिष्ट",
    installment_th: "কিস্তি",
    history_title: "লেনদেনের ইতিহাস",
    history_p: "তারিখ/সময় সহ সমস্ত খরচ এবং কিস্তি পরিশোধের বিবরণ।",
    date_th: "তারিখ",
    type_th: "ধরণ",
    category_th: "ক্যাটাগরি",
    note_th: "নোট",
    amount_th: "পরিমাণ",

    // Dynamic strings in app.js
    total_expense_tag: "মোট খরচ:",
    uncategorized: "শ্রেণীহীন",
    no_notes: "কোনো নোট নেই",
    edit: "সম্পাদনা",
    delete: "মুছে ফেলুন",
    no_expenses_yet: "এখনো কোনো খরচ যোগ করা হয়নি",
    highest_category: "সর্বোচ্চ ক্যাটাগরি",
    category_count: "মোট ক্যাটাগরি",
    expense_count: "মোট লেনদেন",
    average_expense: "গড় খরচ",
    median_expense: "মধ্যক খরচ",
    chart_empty: "এখনো কোনো খরচের ডেটা নেই। বিশ্লেষণ তৈরি করতে খরচ যোগ করুন।",
    comparative_insights_note: "মাত্র ১টি ক্যাটাগরি রয়েছে: তুলনামূলক বিশ্লেষণের জন্য আরও ক্যাটাগরি যোগ করুন।",
    no_trend_data: "কোনো ট্রেন্ড ডেটা উপলব্ধ নেই।",
    per_member: "সদস্যগণ",
    all_settled: "সব পরিশোধিত হয়েছে",
    settled_status: "পরিশোধিত",
    pay_btn: "পরিশোধ",
    no_dues_yet: "কোনো দেনা নেই",
    expense_type: "খরচ",
    payment_type: "পরিশোধ",
    installment_payment: "কিস্তি পরিশোধ",
    no_transactions_yet: "এখনো কোনো লেনদেন নেই",
    all_members_option: "সকল সদস্য",
    no_collector_option: "কোনো সংগ্রাহক নির্বাচিত নেই",
    removed_category: "অপসারিত ক্যাটাগরি",
    removed_member: "অপসারিত",
    unknown: "অজানা",
    who_paid_prefix: "পরিশোধ করেছেন",
    shared_members_label: "যাদের মাঝে ভাগ করা হয়েছে",

    // Prompt, confirms, and alerts
    prompt_edit_member: "সদস্যের নাম সংশোধন করুন:",
    alert_member_empty: "সদস্যের নাম খালি হতে পারে না।",
    prompt_edit_category: "ক্যাটাগরির নাম সংশোধন করুন:",
    alert_category_empty: "ক্যাটাগরির নাম খালি হতে পারে না।",
    alert_category_duplicate: "এই ক্যাটাগরি ইতিমধ্যেই রয়েছে।",
    confirm_delete_member: "এই সদস্যকে কি মুছে ফেলতে চান? এর ফলে তার সাথে সম্পর্কিত সমস্ত পরিশোধ এবং খরচও মুছে যাবে।",
    confirm_delete_category: "এই ক্যাটাগরি মুছে ফেলবেন?",
    alert_category_added: "{count}টি ডিফল্ট ক্যাটাগরি যোগ করা হয়েছে।",
    alert_category_already_exists: "সমস্ত ডিফল্ট ক্যাটাগরি ইতিমধ্যেই এই ইভেন্টে যোগ করা হয়েছে।",
    alert_enter_amount_first: "প্রথমে একটি সঠিক পরিমাণ লিখুন।",
    alert_select_member_first: "কমপক্ষে একজন সদস্য নির্বাচন করুন।",
    alert_edit_cancelled: "সম্পাদনা বাতিল করা হয়েছে।",
    alert_amount_positive: "পরিমাণ অবশ্যই একটি ধনাত্মক পূর্ণসংখ্যা হতে হবে।",
    alert_pick_payer: "কে পরিশোধ করেছে তা নির্বাচন করুন।",
    alert_select_assignee: "পরিমাণ বরাদ্দ করতে কমপক্ষে একজন সদস্য নির্বাচন করুন।",
    alert_assigned_whole: "বরাদ্দকৃত অর্থ অবশ্যই পূর্ণসংখ্যা হতে হবে (JPY)।",
    alert_assigned_match: "বরাদ্দকৃত মোট পরিমাণ {total} অবশ্যই মূল খরচের পরিমাণ {amount}-এর সমান হতে হবে।",
    alert_expense_not_found: "আপডেট করার জন্য নির্দিষ্ট খরচটি খুঁজে পাওয়া যায়নি।",
    alert_expense_updated: "খরচ সার্থকভাবে আপডেট করা হয়েছে।",
    alert_expense_saved: "খরচ সংরক্ষণ করা হয়েছে।",
    alert_installment_positive: "কিস্তির পরিমাণ অবশ্যই একটি ধনাত্মক পূর্ণসংখ্যা হতে হবে।",
    alert_installment_exceed: "কিস্তির পরিমাণ অবশিষ্ট {amount}-এর বেশি হতে পারবে না।",
    alert_payment_recorded: "পরিশোধ নথিভুক্ত করা হয়েছে: {amount}।",
    events_create_choose: "ইভেন্ট পরিচালনা করুন",
    events_dashboard_p: "নতুন ইভেন্ট তৈরি করুন বা ড্যাশবোর্ড দেখতে একটি বিদ্যমান ইভেন্ট নির্বাচন করুন।",
    new_event_placeholder: "নতুন ইভেন্টের নাম",
    prompt_edit_event_name: "ইভেন্টের নাম সম্পাদনা করুন:",
    alert_event_name_empty: "ইভেন্টের নাম খালি হতে পারে না।",
    confirm_delete_event: "এই ইভেন্ট এবং এর সাথে সম্পর্কিত সমস্ত তথ্য মুছে ফেলবেন?",
    cancel: "বাতিল",
    save: "সংরক্ষণ",
    edit_member_title: "সদস্যের নাম সম্পাদনা করুন",
    delete_member_title: "সদস্য মুছুন",
    edit_category_title: "ক্যাটাগরির নাম সম্পাদনা করুন",
    delete_category_title: "ক্যাটাগরি মুছুন",
    delete_expense_title: "খরচ মুছে ফেলুন",
    confirm_delete_expense: "আপনি কি এই খরচটি মুছে ফেলতে চান?",

    // Insights templates
    insight_top_category: "সর্বোচ্চ খরচ হয়েছে ক্যাটাগরি {category}-এ, যা মোট খরচের {share}%।",
    insight_top_payer: "সর্বোচ্চ দাতা {payer} মোট ব্যয়ের {share}% ({amount}) পরিশোধ করেছেন।",
    insight_concentration: "ব্যয় ঘনত্বের হার হলো {concentration} (HHI {hhi})।",
    insight_recent_activity: "সাম্প্রতিক কার্যক্রম {amount} মূল্যের লেনদেন সহ {days} দিন ধরে চলছে।",
    concentration_high: "উচ্চ",
    concentration_medium: "মাঝারি",
    concentration_low: "নিম্ন"
  }
};

let currentLang = localStorage.getItem("wisebalance.lang") || "en";

function t(key, replacements = {}) {
  let val = translations[currentLang]?.[key] || key;
  const activeId = appState?.selectedEventId;
  const activeEvent = (appState?.data?.events || []).find(e => e.id === activeId);
  const currency = activeEvent ? (activeEvent.currency || "JPY") : "JPY";

  val = val.replace("Amount (JPY)", `Amount (${currency})`);
  val = val.replace("金額 (円)", `金額 (${currency})`);
  val = val.replace("whole numbers (JPY)", `whole numbers (${currency})`);
  val = val.replace("整数の必要があります (円)", `整数の必要があります (${currency})`);
  val = val.replace("(JPY)", `(${currency})`);
  val = val.replace("(円/JPY)", `(${currency})`);

  Object.entries(replacements).forEach(([k, v]) => {
    val = val.replace(`{${k}}`, v);
  });
  return val;
}

function updateDOMTranslations() {
  const activeId = appState?.selectedEventId;
  const activeEvent = (appState?.data?.events || []).find(e => e.id === activeId);
  const currency = activeEvent ? (activeEvent.currency || "JPY") : "JPY";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang]?.[key]) {
      let text = translations[currentLang][key];
      text = text.replace("Amount (JPY)", `Amount (${currency})`);
      text = text.replace("金額 (円)", `金額 (${currency})`);
      text = text.replace("whole numbers (JPY).", `whole numbers (${currency}).`);
      text = text.replace("整数の必要があります (円).", `整数の必要があります (${currency}).`);
      text = text.replace("(JPY)", `(${currency})`);
      text = text.replace("(円/JPY)", `(${currency})`);

      if (key === "no_event_selected") {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[currentLang]?.[key]) {
      let text = translations[currentLang][key];
      text = text.replace("Amount (JPY)", `Amount (${currency})`);
      text = text.replace("金額 (円)", `金額 (${currency})`);
      text = text.replace("whole numbers (JPY).", `whole numbers (${currency}).`);
      text = text.replace("整数の必要があります (円).", `整数の必要があります (${currency}).`);
      text = text.replace("(JPY)", `(${currency})`);
      text = text.replace("(円/JPY)", `(${currency})`);
      el.placeholder = text;
    }
  });

  document.title = t("dashboard_page_title");
  document.documentElement.lang = currentLang;
}

function emptyData() {
  return {
    schemaVersion: 1,
    events: [],
    members: [],
    categories: [],
    expenses: [],
    expenseShares: [],
    payments: []
  };
}

function loadAppData() {
  const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!raw) {
    return emptyData();
  }

  try {
    const data = JSON.parse(raw);
    return {
      schemaVersion: Number(data.schemaVersion) || 1,
      events: Array.isArray(data.events) ? data.events : [],
      members: Array.isArray(data.members) ? data.members : [],
      categories: Array.isArray(data.categories) ? data.categories : [],
      expenses: Array.isArray(data.expenses) ? data.expenses : [],
      expenseShares: Array.isArray(data.expenseShares) ? data.expenseShares : [],
      payments: Array.isArray(data.payments) ? data.payments : []
    };
  } catch {
    return emptyData();
  }
}

function saveAppData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function migrateLegacyStorageKeys() {
  const legacyData = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!localStorage.getItem(STORAGE_KEY) && legacyData) {
    localStorage.setItem(STORAGE_KEY, legacyData);
  }

  const legacySelected = localStorage.getItem(LEGACY_SELECTED_EVENT_KEY);
  if (!localStorage.getItem(SELECTED_EVENT_KEY) && legacySelected) {
    localStorage.setItem(SELECTED_EVENT_KEY, legacySelected);
  }
}

function nowIso() {
  return new Date().toISOString();
}

function createId(prefix) {
  const rand = Math.random().toString(36).slice(2, 8);
  return `${prefix}_${Date.now()}_${rand}`;
}

function newMember(eventId, name) {
  return {
    id: createId("mem"),
    eventId,
    name: name.trim(),
    isActive: true,
    createdAt: nowIso(),
    updatedAt: nowIso()
  };
}

function newCategory(eventId, name) {
  return {
    id: createId("cat"),
    eventId,
    name: name.trim(),
    createdAt: nowIso(),
    updatedAt: nowIso()
  };
}

function newExpense({ eventId, amountJPY, categoryId, paidByMemberId, note }) {
  return {
    id: createId("exp"),
    eventId,
    amountJPY,
    categoryId: categoryId || null,
    paidByMemberId,
    note: note.trim(),
    createdAt: nowIso(),
    updatedAt: nowIso()
  };
}

function newExpenseShare(expenseId, memberId, shareJPY) {
  return {
    id: createId("shr"),
    expenseId,
    memberId,
    shareJPY
  };
}

function newPayment({ eventId, fromMemberId, toMemberId, amountJPY }) {
  return {
    id: createId("pay"),
    eventId,
    fromMemberId,
    toMemberId,
    amountJPY,
    createdAt: nowIso()
  };
}

function formatJPY(value) {
  const activeId = appState?.selectedEventId;
  const activeEvent = (appState?.data?.events || []).find(e => e.id === activeId);
  const currency = activeEvent ? (activeEvent.currency || "JPY") : "JPY";

  const clean = currency.toUpperCase();
  if (clean === "JPY") {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      maximumFractionDigits: 0
    }).format(value);
  } else if (clean === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(value);
  } else if (clean === "EUR") {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(value);
  } else if (clean === "BDT") {
    const formatted = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0
    }).format(value);
    return `৳${formatted}`;
  }
  return `${clean} ${value}`;
}

function formatDateTime(value) {
  const date = new Date(value || 0);
  if (Number.isNaN(date.getTime())) {
    return t("unknown");
  }
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const appState = {
  data: loadAppData(),
  selectedEventId: null,
  editingExpenseId: null,
  viewerMemberId: ""
};

migrateLegacyStorageKeys();
appState.data = loadAppData();

const el = {};

function initElements() {
  el.noEventMessage = document.querySelector("#no-event-message");
  el.eventView = document.querySelector("#event-view");
  el.eventTitle = document.querySelector("#event-title");
  el.eventSubtitle = document.querySelector("#event-subtitle");
  el.dashboardTotal = document.querySelector("#dashboard-total");
  el.heroEventName = document.querySelector("#hero-event-name");
  el.heroMemberCount = document.querySelector("#hero-member-count");
  el.heroTotal = document.querySelector("#hero-total");
  el.heroMembers = document.querySelector("#hero-members");
  el.collectorSelect = document.querySelector("#collector-select");
  el.viewerMemberSelect = document.querySelector("#viewer-member-select");
  el.memberForm = document.querySelector("#member-form");
  el.memberName = document.querySelector("#member-name");
  el.memberList = document.querySelector("#member-list");
  el.categoryForm = document.querySelector("#category-form");
  el.categoryName = document.querySelector("#category-name");
  el.categoryList = document.querySelector("#category-list");
  el.useDefaultCategories = document.querySelector("#use-default-categories");
  el.expenseForm = document.querySelector("#expense-form");
  el.expenseAmount = document.querySelector("#expense-amount");
  el.expensePaidBy = document.querySelector("#expense-paid-by");
  el.expenseCategory = document.querySelector("#expense-category");
  el.expenseNote = document.querySelector("#expense-note");
  el.selectAllBtn = document.querySelector("#select-all-btn");
  el.deselectAllBtn = document.querySelector("#deselect-all-btn");
  el.splitEqualBtn = document.querySelector("#split-equal-btn");
  el.expenseSubmitBtn = document.querySelector("#expense-submit-btn");
  el.expenseCancelEdit = document.querySelector("#expense-cancel-edit");
  el.assignmentList = document.querySelector("#assignment-list");
  el.expenseHint = document.querySelector("#expense-hint");
  el.expenseList = document.querySelector("#expense-list");
  el.snapshotMetrics = document.querySelector("#snapshot-metrics");
  el.snapshotStripWrap = document.querySelector("#snapshot-strip-wrap");
  el.expenseChartList = document.querySelector("#expense-chart-list");
  el.snapshotLegend = document.querySelector("#snapshot-legend");
  el.snapshotTrend = document.querySelector("#snapshot-trend");
  el.snapshotInsights = document.querySelector("#snapshot-insights");
  el.statTotal = document.querySelector("#stat-total");
  el.statAssigned = document.querySelector("#stat-assigned");
  el.statRemaining = document.querySelector("#stat-remaining");
  el.balanceTableBody = document.querySelector("#balance-table-body");
  el.owesTableBody = document.querySelector("#owes-table-body");
  el.transactionHistoryBody = document.querySelector("#transaction-history-body");
}

function persist() {
  saveAppData(appState.data);
}

function getSelectedEvent() {
  return appState.data.events.find((event) => event.id === appState.selectedEventId) || null;
}

function initializeSelectedEvent() {
  const fromQuery = new URLSearchParams(window.location.search).get("eventId");
  if (fromQuery) {
    appState.selectedEventId = fromQuery;
    localStorage.setItem(SELECTED_EVENT_KEY, fromQuery);
    return;
  }

  const saved = localStorage.getItem(SELECTED_EVENT_KEY);
  if (saved) {
    appState.selectedEventId = saved;
  }
}

function pickFirstEvent() {
  if (appState.selectedEventId && !getSelectedEvent()) {
    appState.selectedEventId = null;
    localStorage.removeItem(SELECTED_EVENT_KEY);
  }
}

function getEventMembers(eventId) {
  return appState.data.members.filter((member) => member.eventId === eventId);
}

function getEventCategories(eventId) {
  return appState.data.categories.filter((category) => category.eventId === eventId);
}

function getEventExpenses(eventId) {
  return appState.data.expenses.filter((expense) => expense.eventId === eventId);
}

function getSharesForExpense(expenseId) {
  return appState.data.expenseShares.filter((share) => share.expenseId === expenseId);
}

function getEventPayments(eventId) {
  return appState.data.payments.filter((payment) => payment.eventId === eventId);
}

function ensureDefaultCategories(eventId) {
  const existing = getEventCategories(eventId);
  const existingNames = new Set(existing.map((category) => category.name.trim().toLowerCase()));
  let created = 0;

  DEFAULT_CATEGORY_NAMES.forEach((name) => {
    if (existingNames.has(name.toLowerCase())) {
      return;
    }
    appState.data.categories.push(newCategory(eventId, name));
    created += 1;
  });

  return created;
}

function sumEventExpense(eventId) {
  return getEventExpenses(eventId).reduce((sum, expense) => sum + expense.amountJPY, 0);
}

const activeModalTargets = {
  memberId: null,
  categoryId: null,
  expenseId: null
};

function renderEventSettings(eventItem, members, categories) {
  const currentViewerExists = members.some((member) => member.id === appState.viewerMemberId);
  if (!currentViewerExists) {
    appState.viewerMemberId = "";
  }

  el.viewerMemberSelect.innerHTML = [
    `<option value=''>${t("all_members_option")}</option>`,
    ...members.map((member) => `<option value="${member.id}">${escapeHtml(member.name)}</option>`)
  ].join("");
  el.viewerMemberSelect.value = appState.viewerMemberId;

  el.collectorSelect.innerHTML = [
    `<option value=''>${t("no_collector_option")}</option>`,
    ...members.map((member) => `<option value="${member.id}">${escapeHtml(member.name)}</option>`)
  ].join("");
  el.collectorSelect.value = eventItem.collectorMemberId || "";

  el.memberList.innerHTML = members.length
    ? members
      .map((member) => `
      <li class="list-item">
        <div><strong>${escapeHtml(member.name)}</strong></div>
        <div class="item-actions">
          <button class="edit" data-role="edit-member" data-id="${member.id}">${t("edit")}</button>
          <button class="danger" data-role="delete-member" data-id="${member.id}">${t("delete")}</button>
        </div>
      </li>`)
      .join("")
    : `<li class='list-item'>${t("no_members_yet")}</li>`;

  el.categoryList.innerHTML = categories.length
    ? categories
      .map((category) => `
      <li class="list-item">
        <strong>${escapeHtml(category.name)}</strong>
        <div class="item-actions">
          <button class="edit" data-role="edit-category" data-id="${category.id}">${t("edit")}</button>
          <button class="danger" data-role="delete-category" data-id="${category.id}">${t("delete")}</button>
        </div>
      </li>`)
      .join("")
    : `<li class='list-item'>${t("no_categories_yet")}</li>`;

  el.memberList.querySelectorAll("[data-role='edit-member']").forEach((button) => {
    button.addEventListener("click", () => {
      const memberId = button.dataset.id;
      const item = appState.data.members.find((member) => member.id === memberId);
      if (!item) {
        return;
      }
      activeModalTargets.memberId = memberId;
      const input = document.getElementById("edit-member-input");
      if (input) {
        input.value = item.name;
      }
      const modal = document.getElementById("modal-edit-member");
      if (modal) {
        modal.classList.remove("hidden");
        const inp = modal.querySelector("input");
        if (inp) inp.focus();
      }
    });
  });

  el.categoryList.querySelectorAll("[data-role='edit-category']").forEach((button) => {
    button.addEventListener("click", () => {
      const categoryId = button.dataset.id;
      const item = appState.data.categories.find((category) => category.id === categoryId);
      if (!item) {
        return;
      }
      activeModalTargets.categoryId = categoryId;
      const input = document.getElementById("edit-category-input");
      if (input) {
        input.value = item.name;
      }
      const modal = document.getElementById("modal-edit-category");
      if (modal) {
        modal.classList.remove("hidden");
        const inp = modal.querySelector("input");
        if (inp) inp.focus();
      }
    });
  });

  el.memberList.querySelectorAll("[data-role='delete-member']").forEach((button) => {
    button.addEventListener("click", () => {
      const memberId = button.dataset.id;
      activeModalTargets.memberId = memberId;
      const modal = document.getElementById("modal-delete-member");
      if (modal) {
        modal.classList.remove("hidden");
      }
    });
  });

  el.categoryList.querySelectorAll("[data-role='delete-category']").forEach((button) => {
    button.addEventListener("click", () => {
      const categoryId = button.dataset.id;
      activeModalTargets.categoryId = categoryId;
      const modal = document.getElementById("modal-delete-category");
      if (modal) {
        modal.classList.remove("hidden");
      }
    });
  });
}

function buildAssignmentRows(members) {
  if (members.length === 0) {
    el.assignmentList.innerHTML = `<div class='list-item'>${t("add_members_first_shares")}</div>`;
    return;
  }

  el.assignmentList.innerHTML = members
    .map((member) => `
      <label class="assign-row" data-member-id="${member.id}">
        <input type="checkbox" data-role="share-toggle" checked />
        <span>${escapeHtml(member.name)}</span>
        <input type="number" data-role="share-value" min="0" step="1" value="0" />
      </label>`)
    .join("");
}

function setExpenseEditMode(expenseId) {
  appState.editingExpenseId = expenseId;
  el.expenseSubmitBtn.textContent = t("update_expense");
  el.expenseCancelEdit.classList.remove("hidden");
}

function clearExpenseEditMode() {
  appState.editingExpenseId = null;
  el.expenseSubmitBtn.textContent = t("save_expense");
  el.expenseCancelEdit.classList.add("hidden");
}

function populateExpenseFormForEdit(expense, members) {
  el.expenseAmount.value = String(expense.amountJPY);
  el.expensePaidBy.value = expense.paidByMemberId;
  el.expenseCategory.value = expense.categoryId || "";
  el.expenseNote.value = expense.note || "";

  const shareByMemberId = Object.fromEntries(
    getSharesForExpense(expense.id).map((share) => [share.memberId, share.shareJPY])
  );

  const rows = [...el.assignmentList.querySelectorAll(".assign-row")];
  rows.forEach((row) => {
    const memberId = row.dataset.memberId;
    const checkbox = row.querySelector("[data-role='share-toggle']");
    const input = row.querySelector("[data-role='share-value']");
    const share = shareByMemberId[memberId];
    const included = Number.isInteger(share);
    checkbox.checked = included;
    input.disabled = !included;
    input.value = included ? String(share) : "0";
    row.classList.toggle("member-off", !included);
  });

  setExpenseEditMode(expense.id);
  updateExpenseStats();
}

function calculateShareStats() {
  const totalRaw = Number(el.expenseAmount.value);
  const total = Number.isInteger(totalRaw) && totalRaw > 0 ? totalRaw : 0;

  const assigned = [...el.assignmentList.querySelectorAll(".assign-row")]
    .filter((row) => row.querySelector("[data-role='share-toggle']")?.checked)
    .reduce((sum, row) => {
      const amount = Number(row.querySelector("[data-role='share-value']")?.value || 0);
      if (!Number.isInteger(amount) || amount < 0) {
        return sum;
      }
      return sum + amount;
    }, 0);

  return {
    total,
    assigned,
    remaining: total - assigned
  };
}

function updateExpenseStats() {
  const { total, assigned, remaining } = calculateShareStats();
  el.statTotal.textContent = formatJPY(total);
  el.statAssigned.textContent = formatJPY(assigned);
  el.statRemaining.textContent = formatJPY(remaining);
  el.statRemaining.classList.remove("remaining-ok", "remaining-warn", "remaining-over");

  if (remaining === 0) {
    el.statRemaining.classList.add("remaining-ok");
    if (total > 0) {
      if (currentLang === "ja") {
        el.expenseHint.textContent = "金額が一致しました。経費を保存できます。";
      } else {
        el.expenseHint.textContent = "Looks good. You can save this expense.";
      }
    }
  } else if (remaining > 0) {
    el.statRemaining.classList.add("remaining-warn");
    if (total > 0) {
      if (currentLang === "ja") {
        el.expenseHint.textContent = `あと ${formatJPY(remaining)} メンバーに割り当てる必要があります。`;
      } else {
        el.expenseHint.textContent = `Assign ${formatJPY(remaining)} more to members.`;
      }
    }
  } else {
    el.statRemaining.classList.add("remaining-over");
    if (currentLang === "ja") {
      el.expenseHint.textContent = `割り当て金額が総額より ${formatJPY(Math.abs(remaining))} 超過しています。`;
    } else {
      el.expenseHint.textContent = `Assigned exceeds total by ${formatJPY(Math.abs(remaining))}.`;
    }
  }
}

function splitEqualAcrossSelected() {
  const amount = Number(el.expenseAmount.value);
  if (!Number.isInteger(amount) || amount <= 0) {
    el.expenseHint.textContent = t("alert_enter_amount_first");
    return;
  }

  const rows = [...el.assignmentList.querySelectorAll(".assign-row")];
  const selected = rows.filter((row) => row.querySelector("[data-role='share-toggle']")?.checked);
  if (!selected.length) {
    el.expenseHint.textContent = t("alert_select_member_first");
    return;
  }

  const base = Math.floor(amount / selected.length);
  let remainder = amount % selected.length;

  rows.forEach((row) => {
    row.querySelector("[data-role='share-value']").value = "0";
  });

  selected.forEach((row) => {
    const extra = remainder > 0 ? 1 : 0;
    row.querySelector("[data-role='share-value']").value = String(base + extra);
    remainder -= extra;
  });

  updateExpenseStats();
}

function renderExpenseForm(eventId, members, categories) {
  el.expensePaidBy.innerHTML = members.length
    ? members.map((member) => `<option value="${member.id}">${escapeHtml(member.name)}</option>`).join("")
    : `<option value=''>${t("no_members_yet")}</option>`;

  el.expenseCategory.innerHTML = [
    `<option value=''>${t("uncategorized")}</option>`,
    ...categories.map((category) => `<option value="${category.id}">${escapeHtml(category.name)}</option>`)
  ].join("");

  buildAssignmentRows(members);
  updateExpenseStats();

  const disableForm = members.length === 0;
  el.expenseForm.querySelectorAll("input,select,button:not(.lang-select)").forEach((node) => {
    node.disabled = disableForm;
  });

  if (disableForm) {
    el.expenseHint.textContent = t("add_members_first_expense");
    el.statTotal.textContent = formatJPY(0);
    el.statAssigned.textContent = formatJPY(0);
    el.statRemaining.textContent = formatJPY(0);
  }

  const expenses = getEventExpenses(eventId).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const memberById = Object.fromEntries(members.map((member) => [member.id, member]));
  const categoryById = Object.fromEntries(categories.map((category) => [category.id, category]));

  el.expenseList.innerHTML = expenses.length
    ? expenses.map((expense) => {
      const payerName = memberById[expense.paidByMemberId]?.name || t("unknown");
      const categoryName = expense.categoryId ? categoryById[expense.categoryId]?.name || t("removed_category") : t("uncategorized");
      const sharesText = getSharesForExpense(expense.id)
        .map((share) => `${escapeHtml(memberById[share.memberId]?.name || t("removed_member"))}: ${formatJPY(share.shareJPY)}`)
        .join(" | ");
      return `
      <li class="list-item">
        <div>
          <span class="expense-title">${formatJPY(expense.amountJPY)}</span>
          <small class="expense-meta">${t("who_paid_prefix")} ${escapeHtml(payerName)} • ${escapeHtml(categoryName)}</small>
          <small class="expense-meta">${escapeHtml(expense.note || t("no_notes"))}</small>
          <small class="expense-meta">${sharesText}</small>
        </div>
        <div class="item-actions">
          <button class="edit" data-role="edit-expense" data-id="${expense.id}">${t("edit")}</button>
          <button class="danger" data-role="delete-expense" data-id="${expense.id}">${t("delete")}</button>
        </div>
      </li>`;
    }).join("")
    : `<li class='list-item'>${t("no_expenses_yet")}</li>`;

  el.expenseList.querySelectorAll("[data-role='edit-expense']").forEach((button) => {
    button.addEventListener("click", () => {
      const expense = appState.data.expenses.find((item) => item.id === button.dataset.id);
      if (!expense) {
        return;
      }
      populateExpenseFormForEdit(expense, members);
    });
  });

  el.expenseList.querySelectorAll("[data-role='delete-expense']").forEach((button) => {
    button.addEventListener("click", () => {
      const expenseId = button.dataset.id;
      activeModalTargets.expenseId = expenseId;
      const modal = document.getElementById("modal-delete-expense");
      if (modal) {
        modal.classList.remove("hidden");
      }
    });
  });
}

function renderExpenseSnapshot(eventId, categories, members) {
  const expenses = getEventExpenses(eventId);
  if (!expenses.length) {
    el.snapshotMetrics.innerHTML = "";
    el.snapshotStripWrap.innerHTML = "";
    el.snapshotLegend.innerHTML = "";
    el.snapshotTrend.innerHTML = "";
    el.snapshotInsights.innerHTML = "";
    el.expenseChartList.innerHTML = `<div class='chart-empty'>${t("chart_empty")}</div>`;
    return;
  }

  const categoryById = Object.fromEntries(categories.map((category) => [category.id, category.name]));
  const memberById = Object.fromEntries(members.map((member) => [member.id, member.name]));
  const totalsByCategory = {};
  const totalsByPayer = {};
  const totalsByDay = {};

  expenses.forEach((expense) => {
    const categoryName = expense.categoryId ? (categoryById[expense.categoryId] || t("uncategorized")) : t("uncategorized");
    totalsByCategory[categoryName] = (totalsByCategory[categoryName] || 0) + expense.amountJPY;

    const payerName = memberById[expense.paidByMemberId] || t("unknown");
    totalsByPayer[payerName] = (totalsByPayer[payerName] || 0) + expense.amountJPY;

    const date = new Date(expense.createdAt || expense.updatedAt || Date.now());
    const dayKey = Number.isNaN(date.getTime())
      ? t("unknown")
      : `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    totalsByDay[dayKey] = (totalsByDay[dayKey] || 0) + expense.amountJPY;
  });

  const entries = Object.entries(totalsByCategory)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const payerEntries = Object.entries(totalsByPayer)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const dayEntries = Object.entries(totalsByDay)
    .map(([day, value]) => ({ day, value }))
    .sort((a, b) => a.day.localeCompare(b.day));

  const total = entries.reduce((sum, entry) => sum + entry.value, 0);
  const highest = entries[0] || { name: "-", value: 0 };
  const maxValue = highest.value || 1;
  const expenseCount = expenses.length;
  const avgExpense = Math.round(total / Math.max(expenseCount, 1));
  const sortedAmounts = expenses.map((expense) => expense.amountJPY).sort((a, b) => a - b);
  const medianExpense = sortedAmounts.length % 2
    ? sortedAmounts[Math.floor(sortedAmounts.length / 2)]
    : Math.round((sortedAmounts[sortedAmounts.length / 2 - 1] + sortedAmounts[sortedAmounts.length / 2]) / 2);

  const topPayer = payerEntries[0] || { name: "-", value: 0 };
  const topPayerShare = total ? Math.round((topPayer.value / total) * 1000) / 10 : 0;
  const topCategoryShare = total ? Math.round((highest.value / total) * 1000) / 10 : 0;
  const hhi = total
    ? entries.reduce((sum, entry) => {
      const share = entry.value / total;
      return sum + share * share;
    }, 0)
    : 0;
  
  let concentration = t("concentration_low");
  if (hhi > 0.25) {
    concentration = t("concentration_high");
  } else if (hhi > 0.15) {
    concentration = t("concentration_medium");
  }

  el.snapshotMetrics.innerHTML = `
    <article class="metric-card">
      <span class="metric-label">${t("highest_category")}</span>
      <span class="metric-value">${escapeHtml(highest.name)} (${formatJPY(highest.value)})</span>
    </article>
    <article class="metric-card">
      <span class="metric-label">${t("category_count")}</span>
      <span class="metric-value">${entries.length}</span>
    </article>
    <article class="metric-card">
      <span class="metric-label">${t("expense_count")}</span>
      <span class="metric-value">${expenseCount}</span>
    </article>
    <article class="metric-card">
      <span class="metric-label">${t("average_expense")}</span>
      <span class="metric-value">${formatJPY(avgExpense)}</span>
    </article>
    <article class="metric-card">
      <span class="metric-label">${t("median_expense")}</span>
      <span class="metric-value">${formatJPY(medianExpense)}</span>
    </article>`;

  const paletteClasses = ["a", "b", "c", "d", "e", "f"];

  el.snapshotStripWrap.innerHTML = `
    <div class="snapshot-strip" aria-label="Category distribution">
      ${entries
        .map((entry, index) => {
          const percent = Math.max(1, Math.round((entry.value / total) * 100));
          return `<span class="snapshot-segment ${paletteClasses[index % paletteClasses.length]}" style="width:${percent}%" title="${escapeHtml(entry.name)} ${percent}%"></span>`;
        })
        .join("")}
    </div>
    ${entries.length === 1 ? `<p class='snapshot-low-note'>${t("comparative_insights_note")}</p>` : ""}
  `;

  el.expenseChartList.innerHTML = entries
    .map((entry, index) => {
      const percent = Math.round((entry.value / total) * 1000) / 10;
      const width = Math.max(4, Math.round((entry.value / maxValue) * 100));
      return `
      <article class="snapshot-row" title="${escapeHtml(entry.name)}: ${formatJPY(entry.value)} (${percent}%)">
        <div class="snapshot-row-top">
          <span class="snapshot-name">${escapeHtml(entry.name)}</span>
          <span class="snapshot-values">${percent}% | ${formatJPY(entry.value)}</span>
        </div>
        <div class="snapshot-track">
          <div class="snapshot-fill" data-target-width="${width}%"></div>
        </div>
      </article>`;
    })
    .join("");

  el.snapshotLegend.innerHTML = entries
    .slice(0, 6)
    .map((entry, index) => {
      const percent = Math.round((entry.value / total) * 1000) / 10;
      return `
      <span class="snapshot-chip">
        <span class="snapshot-dot snapshot-segment ${paletteClasses[index % paletteClasses.length]}"></span>
        ${escapeHtml(entry.name)} ${percent}%
      </span>`;
    })
    .join("");

  const recentDayEntries = dayEntries.slice(-7);
  const maxDayValue = Math.max(...recentDayEntries.map((entry) => entry.value), 1);
  el.snapshotTrend.innerHTML = recentDayEntries.length
    ? recentDayEntries
      .map((entry) => {
        const width = Math.max(6, Math.round((entry.value / maxDayValue) * 100));
        return `
        <div class="trend-row" title="${escapeHtml(entry.day)} ${formatJPY(entry.value)}">
          <span class="trend-date">${escapeHtml(entry.day)}</span>
          <div class="trend-track"><div class="trend-fill" style="width:${width}%"></div></div>
          <span class="trend-value">${formatJPY(entry.value)}</span>
        </div>`;
      })
      .join("")
    : `<div class='chart-empty'>${t("no_trend_data")}</div>`;

  const insightsList = [
    t("insight_top_category", { category: highest.name, share: topCategoryShare }),
    t("insight_top_payer", { payer: topPayer.name, share: topPayerShare, amount: formatJPY(topPayer.value) }),
    t("insight_concentration", { concentration, hhi: hhi.toFixed(3) }),
    t("insight_recent_activity", {
      days: recentDayEntries.length,
      amount: formatJPY(recentDayEntries.reduce((sum, entry) => sum + entry.value, 0))
    })
  ];

  el.snapshotInsights.innerHTML = insightsList
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join("");

  const fills = [...el.expenseChartList.querySelectorAll(".snapshot-fill")];
  fills.forEach((fill) => {
    fill.style.width = "0";
  });
  requestAnimationFrame(() => {
    fills.forEach((fill) => {
      fill.style.width = fill.dataset.targetWidth || "0";
    });
  });
}

function computeOwesBilateral(eventId, members) {
  const owesMap = {};
  members.forEach((m1) => {
    owesMap[m1.id] = {};
    members.forEach((m2) => {
      owesMap[m1.id][m2.id] = 0;
    });
  });

  // Calculate the raw debts from individual expenses
  getEventExpenses(eventId).forEach((expense) => {
    const payerId = expense.paidByMemberId;
    getSharesForExpense(expense.id).forEach((share) => {
      const participantId = share.memberId;
      if (participantId !== payerId && owesMap[participantId] && owesMap[participantId][payerId] !== undefined) {
        owesMap[participantId][payerId] += share.shareJPY;
      }
    });
  });

  // Net the debts pairwise
  const result = [];
  for (let i = 0; i < members.length; i++) {
    for (let j = i + 1; j < members.length; j++) {
      const idA = members[i].id;
      const idB = members[j].id;
      const aOwesB = owesMap[idA][idB] || 0;
      const bOwesA = owesMap[idB][idA] || 0;

      if (aOwesB > bOwesA) {
        result.push({
          fromMemberId: idA,
          toMemberId: idB,
          totalJPY: aOwesB - bOwesA
        });
      } else if (bOwesA > aOwesB) {
        result.push({
          fromMemberId: idB,
          toMemberId: idA,
          totalJPY: bOwesA - aOwesB
        });
      }
    }
  }

  return result;
}

function applyPayments(owes, payments) {
  return owes.map((owe) => {
    const paid = payments
      .filter((payment) => payment.fromMemberId === owe.fromMemberId && payment.toMemberId === owe.toMemberId)
      .reduce((sum, payment) => sum + payment.amountJPY, 0);
    return {
      ...owe,
      paidJPY: Math.min(paid, owe.totalJPY),
      remainingJPY: Math.max(owe.totalJPY - paid, 0)
    };
  });
}

function renderBalanceTables(eventId, members) {
  if (!members.length) {
    el.balanceTableBody.innerHTML = `<tr><td colspan='3'>${t("no_members_yet")}</td></tr>`;
    el.owesTableBody.innerHTML = `<tr><td colspan='6'>${t("no_dues_yet")}</td></tr>`;
    return;
  }

  const memberById = Object.fromEntries(members.map((member) => [member.id, member]));
  const payments = getEventPayments(eventId);
  const owes = applyPayments(computeOwesBilateral(eventId, members), payments);

  const visibleMembers = appState.viewerMemberId
    ? members.filter((member) => member.id === appState.viewerMemberId)
    : members;

  el.balanceTableBody.innerHTML = visibleMembers
    .map((member) => {
      // Sum what this member still owes to others
      const toPay = owes
        .filter((owe) => owe.fromMemberId === member.id)
        .reduce((sum, owe) => sum + owe.remainingJPY, 0);

      // Sum what others still owe to this member
      const toReceive = owes
        .filter((owe) => owe.toMemberId === member.id)
        .reduce((sum, owe) => sum + owe.remainingJPY, 0);

      return `
      <tr>
        <td>${escapeHtml(member.name)}</td>
        <td class="${toPay ? 'money-neg' : 'money-zero'}">${formatJPY(toPay)}</td>
        <td class="${toReceive ? 'money-pos' : 'money-zero'}">${formatJPY(toReceive)}</td>
      </tr>`;
    })
    .join("");
  const visibleOwes = appState.viewerMemberId
    ? owes.filter((owe) => owe.fromMemberId === appState.viewerMemberId || owe.toMemberId === appState.viewerMemberId)
    : owes;
  if (!visibleOwes.length) {
    el.owesTableBody.innerHTML = `<tr><td colspan='6'>${t("all_settled")}</td></tr>`;
    return;
  }

  el.owesTableBody.innerHTML = visibleOwes
    .map((owe) => {
      const fromName = memberById[owe.fromMemberId]?.name || t("unknown");
      const toName = memberById[owe.toMemberId]?.name || t("unknown");

      if (owe.remainingJPY === 0) {
        return `
        <tr>
          <td>${escapeHtml(fromName)}</td>
          <td>${escapeHtml(toName)}</td>
          <td>${formatJPY(owe.totalJPY)}</td>
          <td>${formatJPY(owe.paidJPY)}</td>
          <td class="money-zero">${formatJPY(owe.remainingJPY)}</td>
          <td>${t("settled_status")}</td>
        </tr>`;
      }

      return `
      <tr>
        <td>${escapeHtml(fromName)}</td>
        <td>${escapeHtml(toName)}</td>
        <td>${formatJPY(owe.totalJPY)}</td>
        <td>${formatJPY(owe.paidJPY)}</td>
        <td class="money-neg">${formatJPY(owe.remainingJPY)}</td>
        <td>
          <form class="inline-pay" data-from="${owe.fromMemberId}" data-to="${owe.toMemberId}" data-remaining="${owe.remainingJPY}">
            <input type="number" min="1" max="${owe.remainingJPY}" step="1" placeholder="${t("amount_placeholder")}" required />
            <button type="submit">${t("pay_btn")}</button>
          </form>
        </td>
      </tr>`;
    })
    .join("");
}

function renderTransactionHistory(eventId, members, categories) {
  const memberById = Object.fromEntries(members.map((member) => [member.id, member.name]));
  const categoryById = Object.fromEntries(categories.map((category) => [category.id, category.name]));

  const expenseTx = getEventExpenses(eventId).map((expense) => {
    const payerName = memberById[expense.paidByMemberId] || t("unknown");
    const categoryName = expense.categoryId ? categoryById[expense.categoryId] || t("removed_category") : t("uncategorized");
    const shareMemberIds = getSharesForExpense(expense.id).map((share) => share.memberId);
    const toNames = shareMemberIds.map((memberId) => memberById[memberId] || t("unknown")).join(", ");
    return {
      type: "expense",
      dateValue: expense.updatedAt || expense.createdAt || "",
      amountJPY: expense.amountJPY,
      from: payerName,
      to: toNames || t("shared_members_label"),
      category: categoryName,
      note: expense.note || t("no_notes"),
      memberIds: [expense.paidByMemberId, ...shareMemberIds]
    };
  });

  const paymentTx = getEventPayments(eventId).map((payment) => {
    const fromName = memberById[payment.fromMemberId] || t("unknown");
    const toName = memberById[payment.toMemberId] || t("unknown");
    return {
      type: "payment",
      dateValue: payment.createdAt || "",
      amountJPY: payment.amountJPY,
      from: fromName,
      to: toName,
      category: "-",
      note: t("installment_payment"),
      memberIds: [payment.fromMemberId, payment.toMemberId]
    };
  });

  const transactions = [...expenseTx, ...paymentTx]
    .filter((tx) => !appState.viewerMemberId || tx.memberIds.includes(appState.viewerMemberId))
    .sort((a, b) => {
      return new Date(b.dateValue).getTime() - new Date(a.dateValue).getTime();
    });

  if (!transactions.length) {
    el.transactionHistoryBody.innerHTML = `<tr><td colspan='7'>${t("no_transactions_yet")}</td></tr>`;
    return;
  }

  el.transactionHistoryBody.innerHTML = transactions
    .map((tx) => {
      const typeLabel = tx.type === "expense" ? t("expense_type") : t("payment_type");
      const typeClass = tx.type === "expense" ? "txn-type-expense" : "txn-type-payment";
      return `
      <tr>
        <td>${escapeHtml(formatDateTime(tx.dateValue))}</td>
        <td><span class="txn-type ${typeClass}">${typeLabel}</span></td>
        <td>${escapeHtml(tx.from)}</td>
        <td>${escapeHtml(tx.to)}</td>
        <td>${escapeHtml(tx.category)}</td>
        <td><span class="txn-note">${escapeHtml(tx.note)}</span></td>
        <td>${formatJPY(tx.amountJPY)}</td>
      </tr>`;
    })
    .join("");
}

function renderHeaderSummary(eventItem, members) {
  const total = sumEventExpense(eventItem.id);
  el.eventTitle.textContent = eventItem.name;
  el.heroEventName.textContent = eventItem.name;
  el.heroMemberCount.textContent = `${members.length} ${t("per_member")}`;
  el.heroTotal.textContent = formatJPY(total);
  el.dashboardTotal.textContent = `${t("total_expense_tag")} ${formatJPY(total)}`;
  el.heroMembers.textContent = members.length ? members.map((member) => member.name).join(", ") : t("no_members_yet");
}

function render() {
  pickFirstEvent();

  const eventItem = getSelectedEvent();
  if (!eventItem) {
    el.eventView.classList.add("hidden");
    if (el.noEventMessage) {
      el.noEventMessage.classList.remove("hidden");
    }
    return;
  }

  if (el.noEventMessage) {
    el.noEventMessage.classList.add("hidden");
  }
  el.eventView.classList.remove("hidden");

  const members = getEventMembers(eventItem.id);
  const categories = getEventCategories(eventItem.id);

  renderHeaderSummary(eventItem, members);
  renderEventSettings(eventItem, members, categories);
  renderExpenseForm(eventItem.id, members, categories);
  renderExpenseSnapshot(eventItem.id, categories, members);
  renderBalanceTables(eventItem.id, members);
  renderTransactionHistory(eventItem.id, members, categories);
}

function initEventListeners() {
  if (el.memberForm) {
    el.memberForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!appState.selectedEventId) {
        return;
      }

      const name = el.memberName.value.trim();
      if (!name) {
        return;
      }

      appState.data.members.push(newMember(appState.selectedEventId, name));
      clearExpenseEditMode();
      el.memberName.value = "";
      persist();
      render();
    });
  }

  if (el.categoryForm) {
    el.categoryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!appState.selectedEventId) {
        return;
      }

      const name = el.categoryName.value.trim();
      if (!name) {
        return;
      }

      const exists = getEventCategories(appState.selectedEventId)
        .some((category) => category.name.trim().toLowerCase() === name.toLowerCase());
      if (exists) {
        el.expenseHint.textContent = t("alert_category_duplicate");
        return;
      }

      appState.data.categories.push(newCategory(appState.selectedEventId, name));
      clearExpenseEditMode();
      el.categoryName.value = "";
      persist();
      render();
    });
  }

  if (el.useDefaultCategories) {
    el.useDefaultCategories.addEventListener("click", () => {
      if (!appState.selectedEventId) {
        return;
      }

      const created = ensureDefaultCategories(appState.selectedEventId);
      if (created > 0) {
        el.expenseHint.textContent = t("alert_category_added", { count: created });
        persist();
        render();
      } else {
        el.expenseHint.textContent = t("alert_category_already_exists");
      }
    });
  }

  if (el.assignmentList) {
    el.assignmentList.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (target.dataset.role === "share-toggle") {
        const row = target.closest(".assign-row");
        if (!row) {
          return;
        }
        const input = row.querySelector("[data-role='share-value']");
        row.classList.toggle("member-off", !target.checked);
        input.disabled = !target.checked;
        if (!target.checked) {
          input.value = "0";
        }
        updateExpenseStats();
      }
    });

    el.assignmentList.addEventListener("input", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      if (target.dataset.role === "share-value") {
        updateExpenseStats();
      }
    });
  }

  if (el.expenseAmount) {
    el.expenseAmount.addEventListener("input", updateExpenseStats);
  }

  if (el.selectAllBtn) {
    el.selectAllBtn.addEventListener("click", () => {
      if (!el.assignmentList) return;
      const rows = el.assignmentList.querySelectorAll(".assign-row");
      rows.forEach((row) => {
        const checkbox = row.querySelector("[data-role='share-toggle']");
        const input = row.querySelector("[data-role='share-value']");
        if (checkbox) checkbox.checked = true;
        if (input) input.disabled = false;
        row.classList.remove("member-off");
      });
      updateExpenseStats();
    });
  }

  if (el.deselectAllBtn) {
    el.deselectAllBtn.addEventListener("click", () => {
      if (!el.assignmentList) return;
      const rows = el.assignmentList.querySelectorAll(".assign-row");
      rows.forEach((row) => {
        const checkbox = row.querySelector("[data-role='share-toggle']");
        const input = row.querySelector("[data-role='share-value']");
        if (checkbox) checkbox.checked = false;
        if (input) {
          input.disabled = true;
          input.value = "0";
        }
        row.classList.add("member-off");
      });
      updateExpenseStats();
    });
  }

  if (el.splitEqualBtn) {
    el.splitEqualBtn.addEventListener("click", splitEqualAcrossSelected);
  }

  if (el.expenseCancelEdit) {
    el.expenseCancelEdit.addEventListener("click", () => {
      clearExpenseEditMode();
      if (el.expenseForm) el.expenseForm.reset();
      updateExpenseStats();
      if (el.expenseHint) el.expenseHint.textContent = t("alert_edit_cancelled");
    });
  }

  if (el.expenseForm) {
    el.expenseForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!appState.selectedEventId) {
        return;
      }

      const amount = Number(el.expenseAmount.value);
      if (!Number.isInteger(amount) || amount <= 0) {
        el.expenseHint.textContent = t("alert_amount_positive");
        return;
      }

      const payerId = el.expensePaidBy.value;
      if (!payerId) {
        el.expenseHint.textContent = t("alert_pick_payer");
        return;
      }

      const selectedRows = [...el.assignmentList.querySelectorAll(".assign-row")]
        .filter((row) => row.querySelector("[data-role='share-toggle']")?.checked);

      if (!selectedRows.length) {
        el.expenseHint.textContent = t("alert_select_assignee");
        return;
      }

      const shares = selectedRows.map((row) => {
        const memberId = row.dataset.memberId;
        const shareValue = Number(row.querySelector("[data-role='share-value']").value);
        return { memberId, shareJPY: shareValue };
      });

      const invalid = shares.some((share) => !Number.isInteger(share.shareJPY) || share.shareJPY < 0);
      if (invalid) {
        el.expenseHint.textContent = t("alert_assigned_whole");
        return;
      }

      const assignedTotal = shares.reduce((sum, share) => sum + share.shareJPY, 0);
      if (assignedTotal !== amount) {
        el.expenseHint.textContent = t("alert_assigned_match", { total: formatJPY(assignedTotal), amount: formatJPY(amount) });
        return;
      }

      if (appState.editingExpenseId) {
        const expense = appState.data.expenses.find((item) => item.id === appState.editingExpenseId);
        if (!expense) {
          clearExpenseEditMode();
          el.expenseHint.textContent = t("alert_expense_not_found");
          return;
        }

        expense.amountJPY = amount;
        expense.categoryId = el.expenseCategory.value || null;
        expense.paidByMemberId = payerId;
        expense.note = el.expenseNote.value || "";
        expense.updatedAt = nowIso();

        appState.data.expenseShares = appState.data.expenseShares.filter(
          (share) => share.expenseId !== expense.id
        );
        shares.forEach((share) => {
          appState.data.expenseShares.push(newExpenseShare(expense.id, share.memberId, share.shareJPY));
        });

        clearExpenseEditMode();
        el.expenseForm.reset();
        el.expenseHint.textContent = t("alert_expense_updated");
      } else {
        const expense = newExpense({
          eventId: appState.selectedEventId,
          amountJPY: amount,
          categoryId: el.expenseCategory.value || null,
          paidByMemberId: payerId,
          note: el.expenseNote.value || ""
        });

        appState.data.expenses.push(expense);
        shares.forEach((share) => {
          appState.data.expenseShares.push(newExpenseShare(expense.id, share.memberId, share.shareJPY));
        });

        el.expenseForm.reset();
        el.expenseHint.textContent = t("alert_expense_saved");
      }

      persist();
      render();
    });
  }

  if (el.owesTableBody) {
    el.owesTableBody.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.classList.contains("inline-pay")) {
        return;
      }
      if (!appState.selectedEventId) {
        return;
      }

      const fromMemberId = form.dataset.from;
      const toMemberId = form.dataset.to;
      const remaining = Number(form.dataset.remaining || 0);
      const input = form.querySelector("input");
      if (!(input instanceof HTMLInputElement) || !fromMemberId || !toMemberId) {
        return;
      }

      const amount = Number(input.value);
      if (!Number.isInteger(amount) || amount <= 0) {
        el.expenseHint.textContent = t("alert_installment_positive");
        return;
      }

      if (amount > remaining) {
        el.expenseHint.textContent = t("alert_installment_exceed", { amount: formatJPY(remaining) });
        return;
      }

      appState.data.payments.push(newPayment({
        eventId: appState.selectedEventId,
        fromMemberId,
        toMemberId,
        amountJPY: amount
      }));

      el.expenseHint.textContent = t("alert_payment_recorded", { amount: formatJPY(amount) });
      persist();
      render();
    });
  }

  if (el.viewerMemberSelect) {
    el.viewerMemberSelect.addEventListener("change", () => {
      appState.viewerMemberId = el.viewerMemberSelect.value || "";
      render();
    });
  }
}

const seededEventCount = appState.data.events.reduce((count, eventItem) => {
  return count + ensureDefaultCategories(eventItem.id);
}, 0);
if (seededEventCount > 0) {
  persist();
}

function initCustomModals() {
  const modalEditMember = document.getElementById("modal-edit-member");
  const editMemberInput = document.getElementById("edit-member-input");
  const editMemberCancel = document.getElementById("modal-edit-member-cancel");
  const editMemberSave = document.getElementById("modal-edit-member-save");

  if (editMemberCancel && modalEditMember) {
    editMemberCancel.addEventListener("click", () => {
      modalEditMember.classList.add("hidden");
    });
  }
  if (editMemberSave && modalEditMember && editMemberInput) {
    editMemberSave.addEventListener("click", () => {
      const memberId = activeModalTargets.memberId;
      const item = appState.data.members.find((m) => m.id === memberId);
      if (!item) return;
      const nextName = editMemberInput.value.trim();
      if (!nextName) {
        el.expenseHint.textContent = t("alert_member_empty");
        return;
      }
      item.name = nextName.slice(0, 30);
      item.updatedAt = nowIso();
      persist();
      modalEditMember.classList.add("hidden");
      render();
    });
  }

  const modalDeleteMember = document.getElementById("modal-delete-member");
  const deleteMemberCancel = document.getElementById("modal-delete-member-cancel");
  const deleteMemberConfirm = document.getElementById("modal-delete-member-confirm");

  if (deleteMemberCancel && modalDeleteMember) {
    deleteMemberCancel.addEventListener("click", () => {
      modalDeleteMember.classList.add("hidden");
    });
  }
  if (deleteMemberConfirm && modalDeleteMember) {
    deleteMemberConfirm.addEventListener("click", () => {
      const memberId = activeModalTargets.memberId;
      const eventItem = getSelectedEvent();
      if (!memberId || !eventItem) return;

      const payerExpenseIds = appState.data.expenses
        .filter((expense) => expense.eventId === eventItem.id && expense.paidByMemberId === memberId)
        .map((expense) => expense.id);

      appState.data.members = appState.data.members.filter((member) => member.id !== memberId);
      appState.data.expenseShares = appState.data.expenseShares.filter((share) => share.memberId !== memberId);
      appState.data.expenses = appState.data.expenses.filter((expense) => expense.paidByMemberId !== memberId);
      appState.data.expenseShares = appState.data.expenseShares.filter((share) => !payerExpenseIds.includes(share.expenseId));
      appState.data.payments = appState.data.payments.filter(
        (payment) => payment.fromMemberId !== memberId && payment.toMemberId !== memberId
      );
      if (eventItem.collectorMemberId === memberId) {
        eventItem.collectorMemberId = null;
      }
      persist();
      modalDeleteMember.classList.add("hidden");
      render();
    });
  }

  const modalEditCategory = document.getElementById("modal-edit-category");
  const editCategoryInput = document.getElementById("edit-category-input");
  const editCategoryCancel = document.getElementById("modal-edit-category-cancel");
  const editCategorySave = document.getElementById("modal-edit-category-save");

  if (editCategoryCancel && modalEditCategory) {
    editCategoryCancel.addEventListener("click", () => {
      modalEditCategory.classList.add("hidden");
    });
  }
  if (editCategorySave && modalEditCategory && editCategoryInput) {
    editCategorySave.addEventListener("click", () => {
      const categoryId = activeModalTargets.categoryId;
      const item = appState.data.categories.find((c) => c.id === categoryId);
      if (!item) return;
      const nextName = editCategoryInput.value.trim();
      if (!nextName) {
        el.expenseHint.textContent = t("alert_category_empty");
        return;
      }
      const duplicate = appState.data.categories.some(
        (category) =>
          category.eventId === item.eventId &&
          category.id !== item.id &&
          category.name.trim().toLowerCase() === nextName.toLowerCase()
      );
      if (duplicate) {
        el.expenseHint.textContent = t("alert_category_duplicate");
        return;
      }
      item.name = nextName.slice(0, 30);
      item.updatedAt = nowIso();
      persist();
      modalEditCategory.classList.add("hidden");
      render();
    });
  }

  const modalDeleteCategory = document.getElementById("modal-delete-category");
  const deleteCategoryCancel = document.getElementById("modal-delete-category-cancel");
  const deleteCategoryConfirm = document.getElementById("modal-delete-category-confirm");

  if (deleteCategoryCancel && modalDeleteCategory) {
    deleteCategoryCancel.addEventListener("click", () => {
      modalDeleteCategory.classList.add("hidden");
    });
  }
  if (deleteCategoryConfirm && modalDeleteCategory) {
    deleteCategoryConfirm.addEventListener("click", () => {
      const categoryId = activeModalTargets.categoryId;
      if (!categoryId) return;
      appState.data.categories = appState.data.categories.filter((category) => category.id !== categoryId);
      appState.data.expenses = appState.data.expenses.map((expense) => {
        if (expense.categoryId === categoryId) {
          return { ...expense, categoryId: null, updatedAt: nowIso() };
        }
        return expense;
      });
      persist();
      modalDeleteCategory.classList.add("hidden");
      render();
    });
  }

  const modalDeleteExpense = document.getElementById("modal-delete-expense");
  const deleteExpenseCancel = document.getElementById("modal-delete-expense-cancel");
  const deleteExpenseConfirm = document.getElementById("modal-delete-expense-confirm");

  if (deleteExpenseCancel && modalDeleteExpense) {
    deleteExpenseCancel.addEventListener("click", () => {
      modalDeleteExpense.classList.add("hidden");
    });
  }
  if (deleteExpenseConfirm && modalDeleteExpense) {
    deleteExpenseConfirm.addEventListener("click", () => {
      const expenseId = activeModalTargets.expenseId;
      if (!expenseId) return;
      appState.data.expenses = appState.data.expenses.filter((expense) => expense.id !== expenseId);
      appState.data.expenseShares = appState.data.expenseShares.filter((share) => share.expenseId !== expenseId);
      persist();
      modalDeleteExpense.classList.add("hidden");
      render();
    });
  }

  [modalEditMember, modalDeleteMember, modalEditCategory, modalDeleteCategory, modalDeleteExpense].forEach((modal) => {
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.add("hidden");
        }
      });
    }
  });
}

function init() {
  initElements();
  initEventListeners();

  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => {
      currentLang = e.target.value;
      localStorage.setItem("wisebalance.lang", currentLang);
      updateDOMTranslations();
      render();
    });
  }
  initCustomModals();
  updateDOMTranslations();
  initializeSelectedEvent();
  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
