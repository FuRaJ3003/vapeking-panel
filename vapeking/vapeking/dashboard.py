from django.utils.translation import ugettext_lazy as _
from jet.dashboard import modules
from jet.dashboard.dashboard import Dashboard, AppIndexDashboard
from jet.dashboard.dashboard_modules import google_analytics


class CustomIndexDashboard(Dashboard):
    columns = 3

    def init_with_context(self, context):
        

    
        self.available_children.append(modules.LinkList)
        self.children.append(modules.LinkList(
            _('Linki VapeKing'),
            children=[
                {
                    'title': ('VapeKing Facebook'),
                    'url': 'https://www.facebook.com/VapeKingSwidnica',
                    'external': True,
                },
                {
                    'title': ('VapeKing Instagram'),
                    'url': 'https://www.instagram.com/vapeking_swidnica/',
                    'external': True,
                },
                {
                    'title': ('VapeKing Aleo'),
                    'url': 'https://aleo.com/pl/firma/vape-king-kamil-milejski-swidnica',
                    'external': True,
                },
            ],
            column=0,
            order=0
        ))


        self.children.append(modules.AppList(
            _('Aplikacje'),
            exclude=('auth.*',),
            column=0,
            order=0
        ))

        self.children.append(modules.RecentActions(
            _('Logi ostatnich operacji'),
            10,
            column=0,
            order=0
        ))

        self.available_children.append(modules.LinkList)
        self.children.append(modules.LinkList(
            _('Akcje'),
            children=[
                {
                    'title': _('Wyloguj się'),
                    'url': 'http://127.0.0.1:8000/admin/logout/',
                    'external': True,
                }
            ],
            column=0,
            order=0
        ))

        self.available_children.append(google_analytics.GoogleAnalyticsVisitorsTotals)
        self.available_children.append(google_analytics.GoogleAnalyticsVisitorsChart)
        self.available_children.append(google_analytics.GoogleAnalyticsPeriodVisitors)
        