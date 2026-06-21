const STORAGE_KEY = "wisebalance.v1.data";
const LEGACY_STORAGE_KEY = "warikan.v1.data";
const SELECTED_EVENT_KEY = "wisebalance.selectedEventId";
const LEGACY_SELECTED_EVENT_KEY = "warikan.selectedEventId";
const DEFAULT_CATEGORY_NAMES = ["Food", "Transport", "Stay", "Tickets", "Shopping", "Others"];

const el = {};

function initElements() {
  el.eventForm = document.querySelector("#event-form");
  el.eventName = document.querySelector("#event-name");
  el.eventCurrency = document.querySelector("#event-currency");
  el.eventList = document.querySelector("#event-list");
  el.modalEdit = document.querySelector("#modal-edit-event");
  el.modalEditInput = document.querySelector("#edit-event-input");
  el.modalEditCancel = document.querySelector("#modal-edit-cancel");
  el.modalEditSave = document.querySelector("#modal-edit-save");
  el.modalDelete = document.querySelector("#modal-delete-event");
  el.modalDeleteCancel = document.querySelector("#modal-delete-cancel");
  el.modalDeleteConfirm = document.querySelector("#modal-delete-confirm");
}

const translations = {
  en: {
    events_page_title: "Events | Wise Balance",
    events_title: "Wise Balance Events",
    events_p: "Create, edit, and choose one event for dashboard view.",
    go_home: "Go to Home",
    dashboard: "Dashboard",
    events_heading: "Events",
    new_event_placeholder: "New event name",
    add: "Add",
    no_events_yet: "No events yet",
    members_count: "members",
    edit: "Edit",
    open: "Open",
    delete: "Delete",
    prompt_edit_event_name: "Edit event name:",
    alert_event_name_empty: "Event name cannot be empty.",
    confirm_delete_event: "Delete this event and all related data?",
    edit_event_modal_title: "Edit Event Name",
    delete_event_modal_title: "Delete Event",
    cancel: "Cancel",
    save: "Save"
  },
  ja: {
    events_page_title: "イベント一覧 | Wise Balance",
    events_title: "Wise Balance イベント",
    events_p: "ダッシュボード表示用のイベントを作成、編集、または選択します。",
    go_home: "ホームへ",
    dashboard: "ダッシュボード",
    events_heading: "イベント",
    new_event_placeholder: "新しいイベント名",
    add: "追加",
    no_events_yet: "まだイベントがありません",
    members_count: "人のメンバー",
    edit: "編集",
    open: "開く",
    delete: "削除",
    prompt_edit_event_name: "イベント名を編集してください：",
    alert_event_name_empty: "イベント名は空にできません。",
    confirm_delete_event: "このイベントと、関連するすべてのデータを削除しますか？",
    edit_event_modal_title: "イベント名の変更",
    delete_event_modal_title: "イベントの削除",
    cancel: "キャンセル",
    save: "保存"
  },
  bn: {
    events_page_title: "ইভেন্টসমূহ | Wise Balance",
    events_title: "Wise Balance ইভেন্টসমূহ",
    events_p: "ড্যাশবোর্ড ভিউ-এর জন্য একটি ইভেন্ট তৈরি করুন, সম্পাদনা করুন এবং নির্বাচন করুন।",
    go_home: "হোমে যান",
    dashboard: "ড্যাশবোর্ড",
    events_heading: "ইভেন্টসমূহ",
    new_event_placeholder: "নতুন ইভেন্টের নাম",
    add: "যোগ করুন",
    no_events_yet: "এখনো কোনো ইভেন্ট নেই",
    members_count: "জন সদস্য",
    edit: "সম্পাদনা",
    open: "খুলুন",
    delete: "মুছে ফেলুন",
    prompt_edit_event_name: "ইভেন্টের নাম সম্পাদনা করুন:",
    alert_event_name_empty: "ইভেন্টের নাম খালি হতে পারে না।",
    confirm_delete_event: "এই ইভেন্ট এবং এর সাথে সম্পর্কিত সমস্ত ডেটা মুছে ফেলবেন?",
    edit_event_modal_title: "ইভেন্টের নাম সম্পাদনা করুন",
    delete_event_modal_title: "ইভেন্ট মুছুন",
    cancel: "বাতিল",
    save: "সংরক্ষণ করুন"
  }
};

let currentLang = localStorage.getItem("wisebalance.lang") || "en";

function t(key) {
  return translations[currentLang]?.[key] || key;
}

function updateDOMTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang]?.[key]) {
      element.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[currentLang]?.[key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  document.title = t("events_page_title");
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

function loadData() {
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

function saveData(data) {
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

function newEvent(name, currency = "JPY") {
  return {
    id: createId("evt"),
    name: name.trim(),
    currency: (currency || "JPY").toUpperCase(),
    collectorMemberId: null,
    createdAt: nowIso(),
    updatedAt: nowIso()
  };
}

function newCategory(eventId, name) {
  return {
    id: createId("cat"),
    eventId,
    name,
    createdAt: nowIso(),
    updatedAt: nowIso()
  };
}

function ensureDefaultCategories(data, eventId) {
  const existing = data.categories.filter((category) => category.eventId === eventId);
  const names = new Set(existing.map((category) => category.name.trim().toLowerCase()));
  DEFAULT_CATEGORY_NAMES.forEach((name) => {
    if (!names.has(name.toLowerCase())) {
      data.categories.push(newCategory(eventId, name));
    }
  });
}

function sumEventExpense(data, eventId) {
  return data.expenses
    .filter((expense) => expense.eventId === eventId)
    .reduce((sum, expense) => sum + expense.amountJPY, 0);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatEventCurrency(value, currency = "JPY") {
  const clean = (currency || "JPY").toUpperCase();
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

const state = {
  data: loadData()
};

migrateLegacyStorageKeys();
state.data = loadData();

function removeEventCascade(eventId) {
  const expenseIds = state.data.expenses
    .filter((expense) => expense.eventId === eventId)
    .map((expense) => expense.id);

  state.data.events = state.data.events.filter((event) => event.id !== eventId);
  state.data.members = state.data.members.filter((member) => member.eventId !== eventId);
  state.data.categories = state.data.categories.filter((category) => category.eventId !== eventId);
  state.data.expenses = state.data.expenses.filter((expense) => expense.eventId !== eventId);
  state.data.expenseShares = state.data.expenseShares.filter((share) => !expenseIds.includes(share.expenseId));
  state.data.payments = state.data.payments.filter((payment) => payment.eventId !== eventId);

  const selectedId = localStorage.getItem(SELECTED_EVENT_KEY);
  if (selectedId === eventId) {
    localStorage.removeItem(SELECTED_EVENT_KEY);
  }
}

function renderEvents() {
  if (state.data.events.length === 0) {
    el.eventList.innerHTML = `<li class='list-item'>${t("no_events_yet")}</li>`;
    return;
  }

  el.eventList.innerHTML = state.data.events
    .map((event) => {
      const members = state.data.members.filter((member) => member.eventId === event.id).length;
      const total = sumEventExpense(state.data, event.id);
      const currency = event.currency || "JPY";
      return `
      <li class="list-item">
        <button class="list-main" data-role="open" data-id="${event.id}">
          ${escapeHtml(event.name)}
          <small>${members} ${t("members_count")} • ${formatEventCurrency(total, currency)}</small>
        </button>
        <div class="item-actions">
          <button class="edit" data-role="edit" data-id="${event.id}">${t("edit")}</button>
          <button class="ghost" data-role="choose" data-id="${event.id}">${t("open")}</button>
          <button class="danger" data-role="delete" data-id="${event.id}">${t("delete")}</button>
        </div>
      </li>`;
    })
    .join("");

  el.eventList.querySelectorAll("[data-role='open'], [data-role='choose']").forEach((button) => {
    button.addEventListener("click", () => {
      const eventId = button.dataset.id;
      localStorage.setItem(SELECTED_EVENT_KEY, eventId);
      window.location.href = `dashboard.html?eventId=${encodeURIComponent(eventId)}`;
    });
  });

  let activeEditEventId = null;
  let activeDeleteEventId = null;

  el.eventList.querySelectorAll("[data-role='edit']").forEach((button) => {
    button.addEventListener("click", () => {
      const eventId = button.dataset.id;
      const item = state.data.events.find((event) => event.id === eventId);
      if (!item) return;

      activeEditEventId = eventId;
      el.modalEditInput.value = item.name;
      el.modalEdit.classList.remove("hidden");
      el.modalEditInput.focus();
    });
  });

  el.eventList.querySelectorAll("[data-role='delete']").forEach((button) => {
    button.addEventListener("click", () => {
      activeDeleteEventId = button.dataset.id;
      el.modalDelete.classList.remove("hidden");
    });
  });

  // Modal actions
  if (el.modalEditCancel) {
    el.modalEditCancel.onclick = () => {
      el.modalEdit.classList.add("hidden");
      activeEditEventId = null;
    };
  }

  if (el.modalEditSave) {
    el.modalEditSave.onclick = () => {
      if (!activeEditEventId) return;
      const item = state.data.events.find((event) => event.id === activeEditEventId);
      if (!item) return;

      const trimmed = el.modalEditInput.value.trim();
      if (!trimmed) {
        alert(t("alert_event_name_empty"));
        return;
      }
      item.name = trimmed.slice(0, 120);
      item.updatedAt = nowIso();
      saveData(state.data);
      el.modalEdit.classList.add("hidden");
      activeEditEventId = null;
      renderEvents();
    };
  }

  if (el.modalDeleteCancel) {
    el.modalDeleteCancel.onclick = () => {
      el.modalDelete.classList.add("hidden");
      activeDeleteEventId = null;
    };
  }

  if (el.modalDeleteConfirm) {
    el.modalDeleteConfirm.onclick = () => {
      if (!activeDeleteEventId) return;
      removeEventCascade(activeDeleteEventId);
      saveData(state.data);
      el.modalDelete.classList.add("hidden");
      activeDeleteEventId = null;
      renderEvents();
    };
  }

  // Click outside to close
  [el.modalEdit, el.modalDelete].forEach((modal) => {
    if (modal) {
      modal.onclick = (e) => {
        if (e.target === modal) {
          modal.classList.add("hidden");
          activeEditEventId = null;
          activeDeleteEventId = null;
        }
      };
    }
  });
}

function init() {
  initElements();

  if (el.eventForm) {
    el.eventForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = el.eventName.value ? el.eventName.value.trim() : "";
      if (!name) {
        return;
      }
      const currency = el.eventCurrency ? el.eventCurrency.value : "JPY";

      const eventItem = newEvent(name, currency);
      state.data.events.unshift(eventItem);
      ensureDefaultCategories(state.data, eventItem.id);
      localStorage.setItem(SELECTED_EVENT_KEY, eventItem.id);
      saveData(state.data);
      if (el.eventName) {
        el.eventName.value = "";
      }
      renderEvents();
    });
  }

  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => {
      currentLang = e.target.value;
      localStorage.setItem("wisebalance.lang", currentLang);
      updateDOMTranslations();
      renderEvents();
    });
  }
  updateDOMTranslations();
  renderEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
